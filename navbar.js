document.addEventListener('DOMContentLoaded', function () {
    sepetToplam();
});

// Navbar'da sepet butonunda ürün adetini güncelle
function sepetToplam() {
    const sepetAdet = document.querySelector(".sepet-toplam");
    
    let sepet = JSON.parse(localStorage.getItem('sepet'));
    
    let toplam = 0;
    
    for (let i = 0; i < 17; i++) {
        toplam += sepet[i];
    }
    
    if (toplam > 0) {
        sepetAdet.classList.remove("hidden");
        sepetAdet.textContent = toplam;
    } else {
        sepetAdet.classList.add("hidden");
    }
    
    // Yarışma kazanılmışsa bildirimi gizle
    if (sepet[16] > 0) {
        document.querySelector(".yarisma-duyuru").classList.add("hidden");
    }
}