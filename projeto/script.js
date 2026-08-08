// script.js
(function() {
    "use strict";

    // carros.js
// Array com mais de 100 carros para o FlexCalculo
// Consumo em km/L (etanol / gasolina)
// Bateria em km/kWh (apenas EVs)

const carros = [
    // --- FIAT ---
    { id: 0, modelo: "Fiat Argo 1.0", etanol: 9.2, gasolina: 13.1, bateria: 0 },
    { id: 1, modelo: "Fiat Argo 1.3", etanol: 8.7, gasolina: 12.4, bateria: 0 },
    { id: 2, modelo: "Fiat Cronos 1.0", etanol: 9.5, gasolina: 13.8, bateria: 0 },
    { id: 3, modelo: "Fiat Cronos 1.3", etanol: 8.9, gasolina: 12.7, bateria: 0 },
    { id: 4, modelo: "Fiat Mobi 1.0", etanol: 10.5, gasolina: 15.2, bateria: 0 },
    { id: 5, modelo: "Fiat Pulse 1.0 Turbo", etanol: 8.8, gasolina: 12.9, bateria: 0 },
    { id: 6, modelo: "Fiat Pulse 1.3", etanol: 8.3, gasolina: 12.1, bateria: 0 },
    { id: 7, modelo: "Fiat Strada 1.3", etanol: 8.5, gasolina: 12.3, bateria: 0 },
    { id: 8, modelo: "Fiat Toro 1.3 Turbo", etanol: 7.2, gasolina: 10.5, bateria: 0 },
    { id: 9, modelo: "Fiat Toro 2.0 Diesel", etanol: 0, gasolina: 0, bateria: 0 },

    // --- VW ---
    { id: 10, modelo: "VW Polo 1.0", etanol: 9.8, gasolina: 14.0, bateria: 0 },
    { id: 11, modelo: "VW Polo 1.6", etanol: 8.7, gasolina: 12.4, bateria: 0 },
    { id: 12, modelo: "VW Polo GTS 1.4", etanol: 8.1, gasolina: 11.8, bateria: 0 },
    { id: 13, modelo: "VW Virtus 1.0", etanol: 9.2, gasolina: 13.5, bateria: 0 },
    { id: 14, modelo: "VW Virtus 1.4", etanol: 8.3, gasolina: 12.0, bateria: 0 },
    { id: 15, modelo: "VW T-Cross 1.0", etanol: 8.8, gasolina: 12.8, bateria: 0 },
    { id: 16, modelo: "VW T-Cross 1.4", etanol: 8.3, gasolina: 12.2, bateria: 0 },
    { id: 17, modelo: "VW Nivus 1.0", etanol: 9.0, gasolina: 13.2, bateria: 0 },
    { id: 18, modelo: "VW Taos 1.4", etanol: 7.8, gasolina: 11.5, bateria: 0 },
    { id: 19, modelo: "VW Saveiro 1.6", etanol: 8.4, gasolina: 12.0, bateria: 0 },
    { id: 20, modelo: "VW Amarok 2.0 Diesel", etanol: 0, gasolina: 0, bateria: 0 },

    // --- CHEVROLET ---
    { id: 21, modelo: "Chevrolet Onix 1.0", etanol: 9.8, gasolina: 14.0, bateria: 0 },
    { id: 22, modelo: "Chevrolet Onix 1.2", etanol: 9.2, gasolina: 13.4, bateria: 0 },
    { id: 23, modelo: "Chevrolet Onix Plus 1.0", etanol: 9.5, gasolina: 13.8, bateria: 0 },
    { id: 24, modelo: "Chevrolet Onix Plus 1.2", etanol: 9.0, gasolina: 13.1, bateria: 0 },
    { id: 25, modelo: "Chevrolet Cruze 1.4 Turbo", etanol: 7.5, gasolina: 11.2, bateria: 0 },
    { id: 26, modelo: "Chevrolet Cruze Sport6 1.4", etanol: 7.3, gasolina: 10.9, bateria: 0 },
    { id: 27, modelo: "Chevrolet Tracker 1.2", etanol: 8.5, gasolina: 12.5, bateria: 0 },
    { id: 28, modelo: "Chevrolet Tracker 1.4", etanol: 7.9, gasolina: 11.7, bateria: 0 },
    { id: 29, modelo: "Chevrolet Equinox 1.5", etanol: 7.0, gasolina: 10.3, bateria: 0 },
    { id: 30, modelo: "Chevrolet S10 2.8 Diesel", etanol: 0, gasolina: 0, bateria: 0 },

    // --- HYUNDAI ---
    { id: 31, modelo: "Hyundai HB20 1.0", etanol: 9.5, gasolina: 13.7, bateria: 0 },
    { id: 32, modelo: "Hyundai HB20 1.6", etanol: 8.2, gasolina: 12.0, bateria: 0 },
    { id: 33, modelo: "Hyundai HB20S 1.0", etanol: 9.2, gasolina: 13.4, bateria: 0 },
    { id: 34, modelo: "Hyundai HB20S 1.6", etanol: 8.0, gasolina: 11.8, bateria: 0 },
    { id: 35, modelo: "Hyundai Creta 1.6", etanol: 7.8, gasolina: 11.5, bateria: 0 },
    { id: 36, modelo: "Hyundai Creta 2.0", etanol: 7.2, gasolina: 10.6, bateria: 0 },
    { id: 37, modelo: "Hyundai Tucson 2.0", etanol: 6.8, gasolina: 10.0, bateria: 0 },

    // --- TOYOTA ---
    { id: 38, modelo: "Toyota Corolla 2.0", etanol: 7.9, gasolina: 11.8, bateria: 0 },
    { id: 39, modelo: "Toyota Corolla Cross 2.0", etanol: 7.5, gasolina: 11.2, bateria: 0 },
    { id: 40, modelo: "Toyota Yaris 1.5", etanol: 8.8, gasolina: 12.8, bateria: 0 },
    { id: 41, modelo: "Toyota Yaris Sedan 1.5", etanol: 8.5, gasolina: 12.5, bateria: 0 },
    { id: 42, modelo: "Toyota Hilux 2.8 Diesel", etanol: 0, gasolina: 0, bateria: 0 },
    { id: 43, modelo: "Toyota SW4 2.8 Diesel", etanol: 0, gasolina: 0, bateria: 0 },

    // --- HONDA ---
    { id: 44, modelo: "Honda Civic 2.0", etanol: 8.2, gasolina: 12.0, bateria: 0 },
    { id: 45, modelo: "Honda Civic Touring 1.5", etanol: 7.8, gasolina: 11.5, bateria: 0 },
    { id: 46, modelo: "Honda City 1.5", etanol: 9.0, gasolina: 13.2, bateria: 0 },
    { id: 47, modelo: "Honda City Sedan 1.5", etanol: 8.7, gasolina: 12.9, bateria: 0 },
    { id: 48, modelo: "Honda HR-V 1.5", etanol: 8.3, gasolina: 12.3, bateria: 0 },
    { id: 49, modelo: "Honda HR-V 1.8", etanol: 7.6, gasolina: 11.3, bateria: 0 },
    { id: 50, modelo: "Honda CR-V 2.0", etanol: 7.0, gasolina: 10.5, bateria: 0 },

    // --- RENAULT ---
    { id: 51, modelo: "Renault Kwid 1.0", etanol: 10.1, gasolina: 14.8, bateria: 0 },
    { id: 52, modelo: "Renault Sandero 1.0", etanol: 9.2, gasolina: 13.5, bateria: 0 },
    { id: 53, modelo: "Renault Sandero 1.6", etanol: 8.0, gasolina: 11.8, bateria: 0 },
    { id: 54, modelo: "Renault Logan 1.0", etanol: 9.0, gasolina: 13.2, bateria: 0 },
    { id: 55, modelo: "Renault Logan 1.6", etanol: 7.9, gasolina: 11.6, bateria: 0 },
    { id: 56, modelo: "Renault Duster 1.6", etanol: 7.5, gasolina: 11.0, bateria: 0 },
    { id: 57, modelo: "Renault Duster 2.0", etanol: 6.8, gasolina: 10.2, bateria: 0 },
    { id: 58, modelo: "Renault Captur 1.6", etanol: 7.8, gasolina: 11.5, bateria: 0 },

    // --- FORD ---
    { id: 59, modelo: "Ford Ka 1.0", etanol: 9.6, gasolina: 13.9, bateria: 0 },
    { id: 60, modelo: "Ford Ka 1.5", etanol: 8.2, gasolina: 12.0, bateria: 0 },
    { id: 61, modelo: "Ford Fiesta 1.0", etanol: 9.0, gasolina: 13.2, bateria: 0 },
    { id: 62, modelo: "Ford Fiesta 1.6", etanol: 7.8, gasolina: 11.5, bateria: 0 },
    { id: 63, modelo: "Ford Focus 2.0", etanol: 7.0, gasolina: 10.5, bateria: 0 },
    { id: 64, modelo: "Ford EcoSport 1.6", etanol: 7.4, gasolina: 10.9, bateria: 0 },
    { id: 65, modelo: "Ford EcoSport 2.0", etanol: 6.6, gasolina: 9.8, bateria: 0 },
    { id: 66, modelo: "Ford Ranger 3.2 Diesel", etanol: 0, gasolina: 0, bateria: 0 },

    // --- JEEP ---
    { id: 67, modelo: "Jeep Renegade 1.3", etanol: 8.2, gasolina: 12.0, bateria: 0 },
    { id: 68, modelo: "Jeep Renegade 1.8", etanol: 7.2, gasolina: 10.5, bateria: 0 },
    { id: 69, modelo: "Jeep Compass 1.3", etanol: 7.5, gasolina: 11.0, bateria: 0 },
    { id: 70, modelo: "Jeep Compass 2.0 Diesel", etanol: 0, gasolina: 0, bateria: 0 },
    { id: 71, modelo: "Jeep Commander 2.0 Diesel", etanol: 0, gasolina: 0, bateria: 0 },

    // --- NISSAN ---
    { id: 72, modelo: "Nissan Kicks 1.6", etanol: 8.0, gasolina: 11.8, bateria: 0 },
    { id: 73, modelo: "Nissan Versa 1.6", etanol: 8.5, gasolina: 12.5, bateria: 0 },
    { id: 74, modelo: "Nissan Sentra 2.0", etanol: 7.2, gasolina: 10.8, bateria: 0 },
    { id: 75, modelo: "Nissan Frontier 2.3 Diesel", etanol: 0, gasolina: 0, bateria: 0 },

    // --- PEUGEOT ---
    { id: 76, modelo: "Peugeot 208 1.0", etanol: 9.4, gasolina: 13.6, bateria: 0 },
    { id: 77, modelo: "Peugeot 208 1.6", etanol: 8.1, gasolina: 11.9, bateria: 0 },
    { id: 78, modelo: "Peugeot 2008 1.6", etanol: 7.6, gasolina: 11.2, bateria: 0 },

    // --- CITROËN ---
    { id: 79, modelo: "Citroën C3 1.0", etanol: 9.3, gasolina: 13.5, bateria: 0 },
    { id: 80, modelo: "Citroën C3 1.6", etanol: 8.0, gasolina: 11.8, bateria: 0 },
    { id: 81, modelo: "Citroën C4 Cactus 1.6", etanol: 7.4, gasolina: 10.9, bateria: 0 },

    // --- MITSUBISHI ---
    { id: 82, modelo: "Mitsubishi Lancer 2.0", etanol: 7.0, gasolina: 10.5, bateria: 0 },
    { id: 83, modelo: "Mitsubishi Outlander 2.0", etanol: 6.5, gasolina: 9.8, bateria: 0 },
    { id: 84, modelo: "Mitsubishi Pajero 3.2 Diesel", etanol: 0, gasolina: 0, bateria: 0 },

    // --- SUBARU ---
    { id: 85, modelo: "Subaru XV 2.0", etanol: 6.8, gasolina: 10.2, bateria: 0 },
    { id: 86, modelo: "Subaru Forester 2.5", etanol: 6.0, gasolina: 9.0, bateria: 0 },

    // --- VOLVO ---
    { id: 87, modelo: "Volvo XC60 2.0", etanol: 5.8, gasolina: 8.8, bateria: 0 },
    { id: 88, modelo: "Volvo XC90 2.0", etanol: 5.2, gasolina: 8.0, bateria: 0 },

    // --- BMW ---
    { id: 89, modelo: "BMW 320i 2.0", etanol: 6.5, gasolina: 9.8, bateria: 0 },
    { id: 90, modelo: "BMW X1 2.0", etanol: 6.2, gasolina: 9.4, bateria: 0 },
    { id: 91, modelo: "BMW X3 2.0", etanol: 5.8, gasolina: 8.8, bateria: 0 },

    // --- MERCEDES ---
    { id: 92, modelo: "Mercedes A200 1.3", etanol: 6.8, gasolina: 10.2, bateria: 0 },
    { id: 93, modelo: "Mercedes GLA200 1.3", etanol: 6.5, gasolina: 9.8, bateria: 0 },
    { id: 94, modelo: "Mercedes GLB200 1.3", etanol: 6.2, gasolina: 9.4, bateria: 0 },

    // --- AUDI ---
    { id: 95, modelo: "Audi A3 2.0", etanol: 6.4, gasolina: 9.6, bateria: 0 },
    { id: 96, modelo: "Audi Q3 2.0", etanol: 6.0, gasolina: 9.0, bateria: 0 },
    { id: 97, modelo: "Audi Q5 2.0", etanol: 5.5, gasolina: 8.4, bateria: 0 },

    // --- JAGUAR / LAND ROVER ---
    { id: 98, modelo: "Land Rover Evoque 2.0", etanol: 5.0, gasolina: 7.8, bateria: 0 },
    { id: 99, modelo: "Land Rover Discovery 3.0", etanol: 4.2, gasolina: 6.5, bateria: 0 },

    // --- PORSCHE ---
    { id: 100, modelo: "Porsche Cayenne 3.0", etanol: 4.0, gasolina: 6.2, bateria: 0 },
    { id: 101, modelo: "Porsche Macan 2.0", etanol: 4.5, gasolina: 7.0, bateria: 0 },

    // --- BYD (Elétricos) ---
    { id: 102, modelo: "BYD Dolphin (EV)", etanol: 0, gasolina: 0, bateria: 14.5 },
    { id: 103, modelo: "BYD Seal (EV)", etanol: 0, gasolina: 0, bateria: 13.8 },
    { id: 104, modelo: "BYD Yuan Plus (EV)", etanol: 0, gasolina: 0, bateria: 13.0 },
    { id: 105, modelo: "BYD Tang (EV)", etanol: 0, gasolina: 0, bateria: 12.0 },

    // --- CHERY ---
    { id: 106, modelo: "Chery Tiggo 2 1.5", etanol: 7.8, gasolina: 11.5, bateria: 0 },
    { id: 107, modelo: "Chery Tiggo 5 2.0", etanol: 6.8, gasolina: 10.2, bateria: 0 },
    { id: 108, modelo: "Chery Tiggo 8 1.6", etanol: 7.2, gasolina: 10.8, bateria: 0 },

    // --- GWM ---
    { id: 109, modelo: "GWM Haval H6 HEV", etanol: 0, gasolina: 0, bateria: 12.5 },
    { id: 110, modelo: "GWM Ora 03 (EV)", etanol: 0, gasolina: 0, bateria: 14.2 },

    // --- CAOA CHERY ---
    { id: 111, modelo: "Caoa Chery Arrizo 6 1.5", etanol: 7.5, gasolina: 11.2, bateria: 0 },
    { id: 112, modelo: "Caoa Chery Tiggo 7 1.6", etanol: 7.0, gasolina: 10.5, bateria: 0 },

    // --- RAM ---
    { id: 113, modelo: "RAM 1500 5.7", etanol: 0, gasolina: 4.5, bateria: 0 },
    { id: 114, modelo: "RAM 2500 6.7 Diesel", etanol: 0, gasolina: 0, bateria: 0 },

    // --- IVECO ---
    { id: 115, modelo: "Iveco Daily 3.0 Diesel", etanol: 0, gasolina: 0, bateria: 0 },

    // --- SPRINTER ---
    { id: 116, modelo: "Mercedes Sprinter 2.1 Diesel", etanol: 0, gasolina: 0, bateria: 0 },

    // --- MINI ---
    { id: 117, modelo: "Mini Cooper 1.5", etanol: 6.8, gasolina: 10.2, bateria: 0 },
    { id: 118, modelo: "Mini Countryman 2.0", etanol: 6.2, gasolina: 9.4, bateria: 0 },

    // --- ALFA ROMEO ---
    { id: 119, modelo: "Alfa Romeo Stelvio 2.0", etanol: 5.5, gasolina: 8.4, bateria: 0 },

    // --- LEXUS ---
    { id: 120, modelo: "Lexus UX 250h", etanol: 0, gasolina: 12.5, bateria: 0 },
    { id: 121, modelo: "Lexus RX 350", etanol: 0, gasolina: 8.5, bateria: 0 },

    // --- JAC ---
    { id: 122, modelo: "JAC J2 1.5", etanol: 8.0, gasolina: 11.8, bateria: 0 },
    { id: 123, modelo: "JAC T6 2.0", etanol: 6.5, gasolina: 9.8, bateria: 0 },

    // --- EFFA ---
    { id: 124, modelo: "Effa M10 1.3", etanol: 7.5, gasolina: 11.0, bateria: 0 },

    // --- TRIUMPH (carros esportivos) ---
    { id: 125, modelo: "Triumph TR4 2.0", etanol: 4.8, gasolina: 7.2, bateria: 0 },

    // --- MORGAN ---
    { id: 126, modelo: "Morgan Plus 4 2.0", etanol: 4.5, gasolina: 6.8, bateria: 0 },

    // --- ASTON MARTIN ---
    { id: 127, modelo: "Aston Martin Vantage 4.0", etanol: 3.2, gasolina: 5.0, bateria: 0 }
];

// Exporta para uso em outros arquivos (Node.js/ES Modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = carros;
}

    // ---------- 2. REFERÊNCIAS DOM ----------
    const carSelect = document.getElementById('carSelect');
    const priceEthanol = document.getElementById('priceEthanol');
    const priceGasoline = document.getElementById('priceGasoline');
    const calcBtn = document.getElementById('calcBtn');
    const fetchBtn = document.getElementById('fetchApiBtn');

    const ethanolResult = document.getElementById('ethanolResult');
    const gasolineResult = document.getElementById('gasolineResult');
    const veredictBadge = document.getElementById('veredictBadge');

    const catalogDiv = document.getElementById('carCatalog');

    // ---------- 3. POPULAR SELECT E CATÁLOGO ----------
    function populateSelectAndCatalog() {
        // Select
        carSelect.innerHTML = '';
        carros.forEach(c => {
            const opt = document.createElement('option');
            opt.value = c.id;
            opt.textContent = c.modelo + (c.bateria > 0 ? ' (EV)' : '');
            carSelect.appendChild(opt);
        });

        // Catálogo visual
        catalogDiv.innerHTML = '';
        carros.forEach(c => {
            const div = document.createElement('div');
            div.className = 'car-item';
            let specText = '';
            if (c.bateria > 0) {
                specText = `⚡ bateria: ${c.bateria} km/kWh`;
            } else {
                specText = `🍃 etanol: ${c.etanol} km/L · ⛽ gasolina: ${c.gasolina} km/L`;
            }
            div.innerHTML = `
                <span class="name">${c.modelo}</span>
                <span class="spec">${specText}</span>
            `;
            catalogDiv.appendChild(div);
        });
    }

    // ---------- 4. FUNÇÃO DE COMPARAÇÃO (eficiência) ----------
    function compareFuel(carId, precoEtanol, precoGasolina) {
        const car = carros.find(c => c.id === Number(carId));
        if (!car) {
            return { error: 'Modelo não encontrado' };
        }

        if (car.bateria > 0 || (car.etanol === 0 && car.gasolina === 0)) {
            return { error: 'Veículo elétrico ou sem dados de combustão' };
        }

        if (precoEtanol <= 0 || precoGasolina <= 0) {
            return { error: 'Preços inválidos (devem ser > 0)' };
        }

        const custoEtanol = precoEtanol / car.etanol;
        const custoGasolina = precoGasolina / car.gasolina;

        let melhor = '';
        let diff = 0;
        if (custoEtanol < custoGasolina) {
            melhor = 'Etanol';
            diff = ((custoGasolina - custoEtanol) / custoGasolina) * 100;
        } else if (custoGasolina < custoEtanol) {
            melhor = 'Gasolina';
            diff = ((custoEtanol - custoGasolina) / custoEtanol) * 100;
        } else {
            melhor = 'Empate técnico';
            diff = 0;
        }

        return {
            modelo: car.modelo,
            etanol_kmL: car.etanol,
            gasolina_kmL: car.gasolina,
            precoEtanol,
            precoGasolina,
            custoEtanol,
            custoGasolina,
            melhor,
            diffPercent: diff.toFixed(1)
        };
    }

    // ---------- 5. ATUALIZAR TELA COM RESULTADO ----------
    function updateResult(result) {
        if (!result || result.error) {
            ethanolResult.textContent = '—';
            gasolineResult.textContent = '—';
            veredictBadge.textContent = result?.error || '⚠️ erro';
            veredictBadge.style.background = '#e2e8f0';
            veredictBadge.style.color = '#1e293b';
            return;
        }

        ethanolResult.textContent = `R$ ${result.custoEtanol.toFixed(3)}/km`;
        gasolineResult.textContent = `R$ ${result.custoGasolina.toFixed(3)}/km`;

        let badgeText = '';
        let bgColor = '';
        if (result.melhor === 'Etanol') {
            badgeText = `🍃 Etanol compensa ${result.diffPercent}% mais`;
            bgColor = '#0b7e3d';
            veredictBadge.style.color = 'white';
        } else if (result.melhor === 'Gasolina') {
            badgeText = `⛽ Gasolina compensa ${result.diffPercent}% mais`;
            bgColor = '#0284c7';
            veredictBadge.style.color = 'white';
        } else {
            badgeText = `⚖️ Empate (custo igual)`;
            bgColor = '#eab308';
            veredictBadge.style.color = '#1e293b';
        }
        veredictBadge.textContent = badgeText;
        veredictBadge.style.background = bgColor;
    }

    // ---------- 6. AÇÃO DO BOTÃO CALCULAR ----------
    function handleCalculate() {
        const carId = carSelect.value;
        const pE = parseFloat(priceEthanol.value);
        const pG = parseFloat(priceGasoline.value);

        if (isNaN(pE) || isNaN(pG)) {
            updateResult({ error: 'Preencha os preços corretamente' });
            return;
        }

        const result = compareFuel(carId, pE, pG);
        updateResult(result);
    }

    // ---------- 7. SIMULAÇÃO DE API DE PREÇOS ----------
    function fetchPricesFromAPI() {
        // Em um projeto real, faríamos fetch() para uma API pública.
        // Usamos valores médios para demonstração.
        const mockEthanol = 3.89;
        const mockGasoline = 5.79;

        priceEthanol.value = mockEthanol.toFixed(2);
        priceGasoline.value = mockGasoline.toFixed(2);

        handleCalculate();

        fetchBtn.textContent = '✅ Preços atualizados';
        setTimeout(() => {
            fetchBtn.textContent = '📡 Buscar preços (API)';
        }, 2000);
    }

    // ---------- 8. INICIALIZAÇÃO ----------
    function init() {
        populateSelectAndCatalog();

        if (carSelect.options.length > 0) {
            carSelect.selectedIndex = 0;
        }

        priceEthanol.value = '3.89';
        priceGasoline.value = '5.79';

        calcBtn.addEventListener('click', handleCalculate);
        fetchBtn.addEventListener('click', fetchPricesFromAPI);

        setTimeout(() => handleCalculate(), 100);
    }

    init();

})();