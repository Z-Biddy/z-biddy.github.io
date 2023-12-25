// URL'den "urun" parametresini bul, ürünü seç
document.addEventListener('DOMContentLoaded', function () {
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const urun = params.get("urun");
    
    if (urun != null) {
        clicked(urun, Button[urun].dataset.product);
    }
    
    let sepet = JSON.parse(localStorage.getItem('sepet'));
    for (let i = 0; i < 8; i++) {
        if (sepet[Button[i].dataset.product] > 0) {
            Button[i].querySelector(".urun-adeti").classList.remove("hidden");
            Button[i].querySelector(".urun-adeti").textContent = sepet[Button[i].dataset.product];
        }
    }
});

const onyazi = document.querySelector(".onyazi");

const Button = [
    document.querySelector("[data-id='b1']"),
    document.querySelector("[data-id='b2']"),
    document.querySelector("[data-id='b3']"),
    document.querySelector("[data-id='b4']"),
    document.querySelector("[data-id='b5']"),
    document.querySelector("[data-id='b6']"),
    document.querySelector("[data-id='b7']"),
    document.querySelector("[data-id='b8']")
];

const Info = [
    document.querySelector(".u1"),
    document.querySelector(".u2"),
    document.querySelector(".u3"),
    document.querySelector(".u4"),
    document.querySelector(".u5"),
    document.querySelector(".u6"),
    document.querySelector(".u7"),
    document.querySelector(".u8")
];

Button[0].onclick = () => { clicked(0, Button[0].dataset.product) };
Button[1].onclick = () => { clicked(1, Button[1].dataset.product) };
Button[2].onclick = () => { clicked(2, Button[2].dataset.product) };
Button[3].onclick = () => { clicked(3, Button[3].dataset.product) };
Button[4].onclick = () => { clicked(4, Button[4].dataset.product) };
Button[5].onclick = () => { clicked(5, Button[5].dataset.product) };
Button[6].onclick = () => { clicked(6, Button[6].dataset.product) };
Button[7].onclick = () => { clicked(7, Button[7].dataset.product) };

const urunFiyat = document.querySelector(".fiyat");

var seciliUrun = -1;

// Butona tıklanınca ürünü seç
function clicked(butonID, urunID) {
    seciliUrun = urunID;
    onyazi.classList.add("hide");
    onyazi.classList.remove("visible");
    for (i = 0; i < 8; i++) {
        if (butonID == i) {
            Info[i].classList.remove("hidden");
            Info[i].classList.remove("hide");
            Info[i].classList.add("visible");
            Button[i].classList.add("secili");
        } else {
            Info[i].classList.remove("visible");
            Info[i].classList.add("hide");
            Button[i].classList.remove("secili");
        }
    }
    urunFiyat.textContent = urunBilgi[urunID][3] + " TL";
    sepetButon(urunID);
}

const sepetCikar = document.querySelector(".sepet-buton-cikar");
const sepetOrta = document.querySelector(".sepet-orta");
const sepetEkle = document.querySelector(".sepet-buton-ekle");

// Sepete ekleme butonunu ayarla
function sepetButon(id) {
    sepetOrta.classList.remove("sepet-disabled");
    let sepet = JSON.parse(localStorage.getItem('sepet'));
    
    if (sepet[id] > 0) {
        sepetOrta.classList.remove("sepet-ekle");
        sepetOrta.classList.add("sepet-adet");
        sepetOrta.textContent = sepet[id];
    
        sepetCikar.classList.add("buton-goster");
        sepetEkle.classList.add("buton-goster");
    }
    else {
        sepetOrta.classList.remove("sepet-adet");
        sepetOrta.classList.add("sepet-ekle");
        sepetOrta.textContent = "Sepete Ekle";
    
        sepetCikar.classList.remove("buton-goster");
        sepetEkle.classList.remove("buton-goster");
    }
    
    // Buton köşesindeki ürün adetini ayarla
    if (sepet[id] > 0) {
        document.querySelector("[data-product='" + id + "']").querySelector(".urun-adeti").classList.remove("hidden");
        document.querySelector("[data-product='" + id + "']").querySelector(".urun-adeti").textContent = sepet[id];
    } else {
        document.querySelector("[data-product='" + id + "']").querySelector(".urun-adeti").classList.add("hidden");
    }
}

sepetCikar.onclick = () => sepeteEkle(seciliUrun, -1);
sepetOrta.onclick = () => sepetClick(seciliUrun);
sepetEkle.onclick = () => sepeteEkle(seciliUrun, 1);

// Sepete yeni ürün ekle
function sepetClick(id) {
    if (id != -1) {
        let sepet = JSON.parse(localStorage.getItem('sepet'));
    
        if (sepet[id] < 1) {
            sepetiGuncelle(id, 1);
            sepetButon(id);
        }
    }
}

// Sepete ürün ekle/çıkar
function sepeteEkle(id, ekle) {
    let sepet = JSON.parse(localStorage.getItem('sepet'));
    
    sepetiGuncelle(id, sepet[id] + ekle);
    sepetButon(id);
    
    if (sepet[id] + ekle > 0) {
        sepetOrta.classList.add("sepet-orta-yan-son");
        setTimeout(() => sepetOrta.classList.remove("sepet-orta-yan-son"), 10);
    }
}
