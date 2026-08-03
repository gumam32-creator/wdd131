// Elementos da Página
const anoAtual = document.getElementById('anoatual');
const ultimaAtualizaco = document.getElementById('ultimaModificao');
const hambButton = document.getElementById('menu');
const navigation = document.querySelector('.navigation');
const container = document.querySelector(".res-grid");

// Configurações do Rodapé
const hoje = new Date();
anoAtual.textContent = hoje.getFullYear();
ultimaAtualizaco.textContent = `Última modificação realizada em ${document.lastModified}`;

// Menu Hambúrguer Toggle
hambButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hambButton.classList.toggle('open');
});

// Banco de Dados dos Templos
const templos = [
  {
    nomeDoTemplo: "Aba Nigeria",
    localizacao: "Aba, Nigéria",
    consagracao: "2005, 7 de agosto",
    area: 11500,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Manti Utah",
    localizacao: "Manti, Utah, Estados Unidos",
    consagracao: "1888, 21 de maio",
    area: 74792,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Payson Utah",
    localizacao: "Payson, Utah, Estados Unidos",
    consagracao: "2015, 7 de junho",
    area: 96630,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Yigo Guam",
    localizacao: "Yigo, Guam",
    consagracao: "2020, 2 de maio",
    area: 6861,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    nomeDoTemplo: "Washington D.C.",
    localizacao: "Kensington, Maryland, Estados Unidos",
    consagracao: "1974, 19 de novembro",
    area: 156558,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    nomeDoTemplo: "Lima Peru",
    localizacao: "Lima, Peru",
    consagracao: "1986, 10 de janeiro",
    area: 9600,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Cidade do México, México",
    localizacao: "Cidade do México, México",
    consagracao: "1983, 2 de dezembro",
    area: 116642,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Mount Timpanogos Utah Temple",
    localizacao: "American Fork, Utah",
    consagracao: "1996, 13 de outubro",
    area: 107242,
    urlDaImagem: "https://churchofjesuschristtemples.org/assets/img/temples/mount-timpanogos-utah-temple/mount-timpanogos-utah-temple-60330-main.jpg"
  },
  {
    nomeDoTemplo: "Templo de Nuku'alofa Tonga",
    localizacao: "Liahona, Tongatapu, Tonga",
    consagracao: "1983, 9 de agosto",
    area: 21184,
    urlDaImagem: "https://churchofjesuschristtemples.org/assets/img/temples/nuku'alofa-tonga-temple/nuku'alofa-tonga-temple-12094-main.jpg"
  }
];

// Constantes de Corte para Filtros
const anoCorte = 1950;
const areaGrande = 50000;

// Função para Criar e Renderizar os Cards na Tela
function createTempleCard(filteredTemples) {
    container.innerHTML = ""; // Limpa a div antes de renderizar para não duplicar

    filteredTemples.forEach(templo => {
        let nome = templo.nomeDoTemplo;
        let local = templo.localizacao;
        let consagrado = templo.consagracao;
        let areaT = templo.area;
        let url = templo.urlDaImagem;

        let cardTemplo = document.createElement("figure");

        // Gerando o HTML com as diretrizes de Acessibilidade (alt) e Performance (lazy load)
        cardTemplo.innerHTML = `
            <img src="${url}" alt="Fotografia do ${nome}" loading="lazy">
            <figcaption>
                <h3>${nome}</h3>
                <p><strong>Local:</strong> ${local}</p>
                <p><strong>Consagração:</strong> ${consagrado}</p>
                <p><strong>Área:</strong> ${typeof areaT === 'number' ? areaT.toLocaleString('pt-BR') : areaT} m²</p>
            </figcaption>
        `;
        container.appendChild(cardTemplo);
    });
}

// Controla a classe CSS ativa nos links
function alterarAtividade(elemento) {
    document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
    elemento.classList.add('active');
}

// Função auxiliar para extrair o ano do texto de consagração
function extrairAno(textoConsagracao) {
    const correspondencia = textoConsagracao.match(/\d{4}/);
    return correspondencia ? parseInt(correspondencia[0]) : 0;
}

// Ouvintes de Eventos (Event Listeners) dos Filtros
document.querySelector('#all').addEventListener('click', (e) => {
    e.preventDefault();
    alterarAtividade(e.target);
    document.querySelector('main h2').textContent = "Página Inicial";
    createTempleCard(templos);    
});

document.querySelector('#old').addEventListener('click', (e) => {
    e.preventDefault();
    alterarAtividade(e.target);
    document.querySelector('main h2').textContent = "Templos Antigos (Antes de 1950)";
    const antigos = templos.filter(templo => extrairAno(templo.consagracao) < anoCorte);
    createTempleCard(antigos);    
});

document.querySelector('#new').addEventListener('click', (e) => {
    e.preventDefault();
    alterarAtividade(e.target);
    document.querySelector('main h2').textContent = "Templos Novos (1950 ou posterior)";
    const novos = templos.filter(templo => extrairAno(templo.consagracao) >= anoCorte);
    createTempleCard(novos);    
});

document.querySelector('#large').addEventListener('click', (e) => {
    e.preventDefault();
    alterarAtividade(e.target);
    document.querySelector('main h2').textContent = "Templos Grandes (Mais de 50.000 m²)";
    const grandes = templos.filter(templo => templo.area > areaGrande);
    createTempleCard(grandes);    
});

document.querySelector('#small').addEventListener('click', (e) => {
    e.preventDefault();
    alterarAtividade(e.target);
    document.querySelector('main h2').textContent = "Templos Pequenos (50.000 m² ou menos)";
    const pequenos = templos.filter(templo => templo.area <= areaGrande);
    createTempleCardpequenos = templos.filter(templo => templo.area <= areaGrande);
    createTempleCard(pequenos);    
});

// Renderização inicial ao carregar a página pela primeira vez
createTempleCard(templos);
