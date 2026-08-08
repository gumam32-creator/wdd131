const temParametros = window.location.search.length > 0;
const veioDoFormulario = document.referrer.includes('formulario.html');

if (temParametros || veioDoFormulario) {
    let totalAvaliacoes = localStorage.getItem('avaliacoes');
    
    if (totalAvaliacoes === null) {
        totalAvaliacoes = 0;
    } else {
        totalAvaliacoes = parseInt(totalAvaliacoes);
    }
    
    totalAvaliacoes = totalAvaliacoes + 1;
    localStorage.setItem('avaliacoes', String(totalAvaliacoes));
    
    document.getElementById('confirmPage').innerHTML = `
        <div class="icon">✅</div>
        <h1>Avaliação enviada!</h1>
        <p class="mensagem">Obrigado por compartilhar sua opinião.</p>
        <div class="counter">
            📋 Avaliações enviadas: <span>${totalAvaliacoes}</span>
        </div>
        <br>
        <a href="formulario.html" class="btn-voltar">← Fazer outra avaliação</a>
        <p class="info">💾 Dados salvos no seu navegador (localStorage)</p>
    `;
} else {
    document.getElementById('confirmPage').innerHTML = `
        <div class="icon">📋</div>
        <h1>Página de Confirmação</h1>
        <p class="mensagem">Nenhuma avaliação foi enviada.</p>
        <a href="formulario.html" class="btn-voltar">← Voltar ao formulário</a>
    `;
}