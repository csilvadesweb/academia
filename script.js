document.addEventListener("DOMContentLoaded", function () {
    let whatsappBtn = document.createElement("div");
    whatsappBtn.innerHTML = `<a href="https://wa.me/seu-numero" target="_blank" class="whatsapp-float">
        <img src="assets/icons/whatsapp.png" alt="WhatsApp">
    </a>`;
    document.body.appendChild(whatsappBtn);
});