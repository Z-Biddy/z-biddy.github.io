document.addEventListener('DOMContentLoaded', function () {
    let sepet = JSON.parse(localStorage.getItem("sepet"));
    let alinanUrunler = document.querySelector(".alinan-urunler");
    let template = document.querySelector(".template");
    
    for (let i = 0; i < 17; i++) {
        if (sepet[i] > 0) {
            let urun = template.cloneNode(true);
            
            urun.textContent = sepet[i] + " x " + urunBilgi[i][1] + " " + urunBilgi[i][2] + " - " + sepet[i] * urunBilgi[i][3] + "TL";
            urun.classList.remove("template");
            
            alinanUrunler.appendChild(urun);
        }
    }
});

function formSubmit() {
    document.querySelector(".form").classList.add("hidden");
    document.querySelector(".formSubmit").classList.remove("hidden");
    document.querySelector(".sayfa-adi").textContent = "Sipariş";
    setTimeout(() => {window.location.href = "main.html"}, 3000);
}