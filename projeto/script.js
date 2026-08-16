(function () {
    "use strict";

    // Requisito: Múltiplas funções + Template Literals + localStorage
    
    // ---------- 1. MANIPULAÇÃO DO LOCALSTORAGE ----------
    function saveToLocalStorage(record) {
        let history = JSON.parse(localStorage.getItem('flex_history')) || [];
        history.unshift(record);
        if (history.length > 10) history.pop(); // Limite dos últimos 10
        localStorage.setItem('flex_history', JSON.stringify(history));
    }

    function getLocalStorageHistory() {
        return JSON.parse(localStorage.getItem('flex_history')) || [];
    }

    // ---------- 2. PÁGINA PRINCIPAL (CALCULADORA) ----------
    function initCalculadora() {
        const carSelect = document.getElementById('carSelect');
        const priceEthanol = document.getElementById('priceEthanol');
        const priceGasoline = document.getElementById('priceGasoline');
        const calcBtn = document.getElementById('calcBtn');
        const fetchBtn = document.getElementById('fetchApiBtn');
        const ethanolResult = document.getElementById('ethanolResult');
        const gasolineResult = document.getElementById('gasolineResult');
        const veredictBadge = document.getElementById('veredictBadge');
        const catalogDiv = document.getElementById('carCatalog');

        if (!carSelect) return; // Garante execução apenas se o elemento existir

        // Popular Select & Catálogo usando Método de Array
        function populateUI() {
            carSelect.innerHTML = '';
            catalogDiv.innerHTML = '';

            carros.forEach(c => {
                // Template Literals
                const opt = document.createElement('option');
                opt.value = c.id;
                opt.textContent = `${c.modelo}${c.bateria > 0 ? ' (EV)' : ''}`;
                carSelect.appendChild(opt);

                const div = document.createElement('div');
                div.className = 'car-item';
                const specText = c.bateria > 0 
                    ? `⚡ Bateria: ${c.bateria} km/kWh` 
                    : `🍃 Etanol: ${c.etanol} km/L · ⛽ Gasolina: ${c.gasolina} km/L`;
                
                div.innerHTML = `
                    <span class="name">${c.modelo}</span>
                    <span class="spec">${specText}</span>
                `;
                catalogDiv.appendChild(div);
            });
        }

        // Branch Condicional e Métodos de Cálculo
        function calculateAndRender() {
            const carId = carSelect.value;
            const pE = parseFloat(priceEthanol.value);
            const pG = parseFloat(priceGasoline.value);

            if (isNaN(pE) || isNaN(pG) || pE <= 0 || pG <= 0) {
                renderError("Preencha os preços corretamente!");
                return;
            }

            const car = carros.find(c => c.id === Number(carId));
            
            if (!car || car.bateria > 0) {
                renderError("Veículo elétrico ou não compatível!");
                return;
            }

            const custoEtanol = pE / car.etanol;
            const custoGasolina = pG / car.gasolina;

            let melhor = '';
            let diff = 0;

            // Condicionais
            if (custoEtanol < custoGasolina) {
                melhor = 'Etanol';
                diff = ((custoGasolina - custoEtanol) / custoGasolina) * 100;
            } else if (custoGasolina < custoEtanol) {
                melhor = 'Gasolina';
                diff = ((custoEtanol - custoGasolina) / custoEtanol) * 100;
            } else {
                melhor = 'Empate';
            }

            // Atualização DOM via Template Literal
            ethanolResult.textContent = `R$ ${custoEtanol.toFixed(3)}/km`;
            gasolineResult.textContent = `R$ ${custoGasolina.toFixed(3)}/km`;

            let badgeText = `${melhor === 'Empate' ? '⚖️ Empate Técnico' : `${melhor === 'Etanol' ? '🍃' : '⛽'} ${melhor} compensa ${diff.toFixed(1)}% mais`}`;
            
            veredictBadge.textContent = badgeText;
            veredictBadge.style.background = melhor === 'Etanol' ? '#0b7e3d' : (melhor === 'Gasolina' ? '#0284c7' : '#eab308');
            veredictBadge.style.color = melhor === 'Empate' ? '#1e293b' : '#ffffff';

            // Salvar resultado no localStorage
            saveToLocalStorage({
                modelo: car.modelo,
                melhor,
                data: new Date().toLocaleDateString('pt-BR')
            });
        }

        function renderError(msg) {
            ethanolResult.textContent = '—';
            gasolineResult.textContent = '—';
            veredictBadge.textContent = `⚠️ ${msg}`;
            veredictBadge.style.background = '#e2e8f0';
            veredictBadge.style.color = '#1e293b';
        }

        // Eventos
        calcBtn.addEventListener('click', calculateAndRender);
        fetchBtn.addEventListener('click', () => {
            priceEthanol.value = (3.80 + Math.random() * 0.3).toFixed(2);
            priceGasoline.value = (5.70 + Math.random() * 0.4).toFixed(2);
            calculateAndRender();
        });

        populateUI();
    }

    // ---------- 3. PÁGINA HISTÓRICO ----------
    function initHistorico() {
        const historyList = document.getElementById('historyList');
        const clearBtn = document.getElementById('clearHistoryBtn');

        if (!historyList) return;

        function renderHistory() {
            const records = getLocalStorageHistory();
            historyList.innerHTML = '';

            if (records.length === 0) {
                historyList.innerHTML = `<div class="car-item">Nenhum cálculo salvo até o momento.</div>`;
                return;
            }

            records.forEach(item => {
                const div = document.createElement('div');
                div.className = 'car-item';
                div.innerHTML = `
                    <span class="name">${item.modelo}</span>
                    <span class="spec">Recomendação: <strong>${item.melhor}</strong> em ${item.data}</span>
                `;
                historyList.appendChild(div);
            });
        }

        clearBtn.addEventListener('click', () => {
            localStorage.removeItem('flex_history');
            renderHistory();
        });

        renderHistory();
    }

 
    function initContato() {
        const contactForm = document.getElementById('contactForm');
        const feedbackDiv = document.getElementById('formFeedback');
        const feedbackText = document.getElementById('feedbackText');

        if (!contactForm) return;

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('userName').value;
            
            feedbackDiv.style.display = 'block';
            feedbackText.textContent = `Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`;
            contactForm.reset();
        });
    }

    // Inicialização por página
    document.addEventListener('DOMContentLoaded', () => {
        initCalculadora();
        initHistorico();
        initContato();
    });
})();