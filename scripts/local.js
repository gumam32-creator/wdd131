// Índice
const anoAtual = document.getElementById('anoatual');
const ultimaAtualizacao = document.getElementById('ultimaModificao');

// Elementos dos cards
const cardDentro1 = document.getElementById('card-inside-1');
const cardDentro2 = document.getElementById('card-inside-2');
const cardFora1 = document.getElementById('card-outside-1');
const cardFora2 = document.getElementById('card-outside-2');
const containerMobile = document.getElementById('mobile-cards-container');

 
function ehMobile() {
    return window.innerWidth <= 768;
}

 
function alternarCards() {
    const ehMobileView = ehMobile();
    
    if (ehMobileView) {
        // MODO MOBILE: Mostra cards fora, esconde cards dentro
        cardDentro1.style.display = 'none';
        cardDentro2.style.display = 'none';
        containerMobile.style.display = 'block';
        cardFora1.style.display = '';
        cardFora2.style.display = '';
    } else {
        // MODO DESKTOP: Mostra cards dentro, esconde cards fora
        cardDentro1.style.display = '';
        cardDentro2.style.display = '';
        containerMobile.style.display = 'none';
        cardFora1.style.display = 'none';
        cardFora2.style.display = 'none';
    }
}

 
function atualizarDados() {
    const hoje = new Date();
    anoAtual.textContent = hoje.getFullYear();
    ultimaAtualizacao.textContent = `Última modificação realizada em ${document.lastModified}`;
}

// Inicialização
function iniciar() {
    
    atualizarDados();
    
    
    alternarCards();
    
   
    let temporizadorRedimensionar;
    window.addEventListener('resize', function() {
        clearTimeout(temporizadorRedimensionar);
        temporizadorRedimensionar = setTimeout(() => {
            alternarCards();
        }, 200);
    });
}

 
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciar);
} else {
    iniciar();
}