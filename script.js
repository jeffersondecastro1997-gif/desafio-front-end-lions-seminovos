// Alerta simples ao clicar nos botões de navegação
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        alert('Você clicou no botão!');
    });
});
