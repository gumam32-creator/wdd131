// Indice
const anoAtual = document.getElementById('anoatual');
const ultimaAtualizaco = document.getElementById('ultimaModificao')
const temperatura = document.getElementById('temp')
const condition = document.getElementById('cond')
const wind = document.getElementById('wind')
const windChil = document.getElementById('windChil')


const hoje = new Date();
anoAtual.textContent = hoje.getFullYear();
ultimaAtualizaco.textContent = `Ultima moficação realizada em ${document.lastModified}`



temperatura.textContent = 'Temperatura:  18ºC'
condition.textContent = 'Condição:  Partly Cloudy'
wind.textContent = 'Vento:  5km/h'
windChil.textContent = 'Sensação:   9.8ºC'
