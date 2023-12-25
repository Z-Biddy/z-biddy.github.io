let sepetCikar = [];
let sepetOrta = [];
let sepetEkle = [];
let sepetUrun = [];
let urunSayisi = 0;

// Sayfa açılışında sepetteki ürünleri sayfaya ekle
document.addEventListener('DOMContentLoaded', function () {
    let sepet = JSON.parse(localStorage.getItem("sepet"));
    
    let sepetUrunler = document.querySelector(".sepet-urunler"); 
    
    // Şablonu klonla, değiştir, sayfaya ekle
    for (let i = 0; i < 17; i++) {
        let template = document.querySelector(".template");
        
        if (sepet[i] > 0) {
            let urun = template.cloneNode(true);
            urun.classList.remove("template");
            urun.classList.add("urun");
            
            urun.setAttribute("data-id", i)
            urun.querySelector(".urun-resim").src = "img/" + urunBilgi[i][0];
            urun.querySelector(".urun-isim").textContent = urunBilgi[i][1];
            urun.querySelector(".urun-aciklama").textContent = urunBilgi[i][2];
            urun.querySelector(".urun-fiyat-adet").textContent = sepet[i] + " x " + urunBilgi[i][3] + " =";
            urun.querySelector(".urun-fiyat-toplam").textContent = sepet[i] * urunBilgi[i][3] + " TL";
            urun.querySelector(".sepet-orta").textContent = sepet[i];
            urun.querySelector(".sepet-orta").setAttribute("data-id", i);
            urun.querySelector(".sepet-buton-cikar").setAttribute("data-id", i);
            urun.querySelector(".sepet-buton-ekle").setAttribute("data-id", i);
            
            if (i == 16) {
                urun.querySelector(".sepet-buton-ekle").classList.add("disabled");
            }
            
            sepetUrunler.appendChild(urun);
            urunSayisi++;
        }
    }
    // Sepet boş?
    if (urunSayisi) {
        document.querySelector(".sepet-bos").classList.add("hidden");
        fiyatlariTopla();
    } else {
        document.querySelector(".sepet-onay").classList.add("hidden");
    }
    
    // Eklenmiş butonları array'lere ekle, onclick event'ini ayarla
    for (let i = 0; i < 17; i++) {
        sepetCikar.push(document.querySelector(".sepet-buton-cikar[data-id='" + i + "']"));
        sepetOrta.push(document.querySelector(".sepet-orta[data-id='" + i + "']"));
        sepetEkle.push(document.querySelector(".sepet-buton-ekle[data-id='" + i + "']"));
        sepetUrun.push(document.querySelector(".urun[data-id='" + i + "']"));

        if (sepetCikar[i]) {
            sepetCikar[i].onclick = () => sepeteEkle(i, -1);
        }

        if (sepetEkle[i]) {
            if (i != 16)
                sepetEkle[i].onclick = () => sepeteEkle(i, +1);
        }
    }
});

// Sepete ürün ekle/çıkar
function sepeteEkle(id, ekle) {
    let sepet = JSON.parse(localStorage.getItem('sepet'));
    
        sepet[id] += ekle;
    
    if (sepet[id] > 0) {
        sepetUrun[id].classList.remove("urun-sil");
        sepetOrta[id].onclick = "";
        
        sepetUrun[id].querySelector(".urun-fiyat-adet").textContent = sepet[id] + " x " + urunBilgi[id][3] + " =";
        sepetUrun[id].querySelector(".urun-fiyat-toplam").textContent = sepet[id] * urunBilgi[id][3] + " TL";

        sepetOrta[id].textContent = sepet[id];
        sepetOrta[id].classList.add("sepet-orta-yan-son");
        setTimeout(() => sepetOrta[id].classList.remove("sepet-orta-yan-son"), 10);
        
    } else {
        sepetUrun[id].classList.add("urun-sil");
        sepetOrta[id].textContent = "Sepete Geri Ekle";
        sepetOrta[id].onclick = () => sepeteEkle(id, +1);
    }
    
    sepetiGuncelle(id, sepet[id]);
    fiyatlariTopla();
}

function fiyatlariTopla() {
    let sepet = JSON.parse(localStorage.getItem('sepet'));
    let toplamFiyat = 0;
    
    for (let i = 0; i < 16; i++) {
        toplamFiyat += sepet[i]* urunBilgi[i][3];
    }
    
    document.querySelector(".sepet-toplam-fiyat").textContent = toplamFiyat + " TL";
}
