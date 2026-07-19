// Indice
const anoAtual = document.getElementById('anoatual');
const ultimaAtualizaco = document.getElementById('ultimaModificao');
const hambButton = document.getElementById('menu');
const navigation = document.querySelector('.navigation');


const hoje = new Date();
anoAtual.textContent = hoje.getFullYear();
ultimaAtualizaco.textContent = `Ultima moficação realizada em ${document.lastModified}`


// Menu Hamburguer

hambButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hambButton.classList.toggle('open')
})