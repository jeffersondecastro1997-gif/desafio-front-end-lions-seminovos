// script.js
document.addEventListener('DOMContentLoaded', function() {
    console.log("Página carregada");
});
document.getElementById('agendamentoForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    
    // Simula um envio de sucesso
    alert(`Obrigado, ${nome}! Sua solicitação de visita foi enviada. Entraremos em contato em breve.`);
    
    this.reset(); // Limpa o formulário
});