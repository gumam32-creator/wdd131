const selectProduto = document.getElementById("nome_produto");

const produtos = [
    { id: "fc-1888", nome: "capacitor de fluxo", classificacaomedia: 4.5 },
    { id: "fc-2050", nome: "fios elétricos", classificacaomedia: 4.7 },
    { id: "fs-1987", nome: "circuitos de tempo", classificacaomedia: 3.5 },
    { id: "ac-2000", nome: "reator de baixa tensão", classificacaomedia: 3.9 },
    { id: "jj-1969", nome: "equalizador de distorção", classificacaomedia: 5.0 }
];

produtos.forEach(produto => {
    const option = document.createElement('option');
    option.value = produto.nome;        
    option.textContent = produto.nome;   
    selectProduto.appendChild(option);
});


document.getElementById('anoatual').textContent = new Date().getFullYear();


const dataMod = new Date(document.lastModified);
const dia = String(dataMod.getDate()).padStart(2, '0');
const mes = String(dataMod.getMonth() + 1).padStart(2, '0');
const ano = dataMod.getFullYear();
const horas = String(dataMod.getHours()).padStart(2, '0');
const minutos = String(dataMod.getMinutes()).padStart(2, '0');
document.getElementById('ultimaModificao').textContent = 
    `Última Modificação: ${dia}/${mes}/${ano} ${horas}:${minutos}`;