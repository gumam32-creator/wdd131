// Indice
const anoAtual = document.getElementById('anoatual');
const ultimaAtualizaco = document.getElementById('ultimaModificao')


const hoje = new Date();
anoAtual.textContent = hoje.getFullYear();
ultimaAtualizaco.textContent = `Ultima moficação realizada em ${document.lastModified}`
