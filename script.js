function abrirWhatsApp() {

    const numero = "5569984738218";

    const mensagem = "Olá! Gostaria de solicitar um orçamento de energia solar.";

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
}