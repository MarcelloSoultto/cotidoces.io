document.getElementById('pedido-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Seu pedido foi enviado com sucesso!');
    this.reset(); // Limpa o formulário após o envio
});

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}
