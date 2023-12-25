// Sepetteki bir ürünün adetini belirle
function sepetiGuncelle(id, adet) {
    let sepet = JSON.parse(localStorage.getItem('sepet'));
    
    sepet[id] = adet;
    
    localStorage.setItem('sepet', JSON.stringify(sepet));
    
    sepetToplam();
}

// Sepeti temizle
function sepetiSifirla() {
    let sepet = new Array(17).fill(0);
    
    localStorage.setItem('sepet', JSON.stringify(sepet));
    
    sepetToplam();
}

// localStorage'da "sepet" yoksa oluştur
document.addEventListener('DOMContentLoaded', function () {
    if (!localStorage.getItem('sepet')) {
        sepetiSifirla();
    }
});

const urunBilgi = [
    ["ku-k1.png", "UK1", "Kablolu Kulaklık" , "700" ],
    ["ku-k2.png", "UK2", "Kablolu Kulaklık" , "1000" ],
    ["ku-k3.png", "UK3", "Kablolu Kulaklık" , "1700"],
    ["ku-k4.png", "UK4", "Kablolu Kulaklık" , "2500"],
    ["ku-b1.png", "UB1", "Kablosuz Kulaklık", "800" ],
    ["ku-b2.png", "UB2", "Kablosuz Kulaklık", "1400" ],
    ["ku-b3.png", "UB3", "Kablosuz Kulaklık", "2200"],
    ["ku-b4.png", "UB4", "Kablosuz Kulaklık", "3000"],
    ["ki-k1.png", "IK1", "Kablolu Kulaklık" , "300" ],
    ["ki-k2.png", "IK2", "Kablolu Kulaklık" , "600" ],
    ["ki-k3.png", "IK3", "Kablolu Kulaklık" , "1000"],
    ["ki-k4.png", "IK4", "Kablolu Kulaklık" , "1600"],
    ["ki-b1.png", "IB1", "Kablosuz Kulaklık", "400" ],
    ["ki-b2.png", "IB2", "Kablosuz Kulaklık", "900" ],
    ["ki-b3.png", "IB3", "Kablosuz Kulaklık", "1300"],
    ["ki-b4.png", "IB4", "Kablosuz Kulaklık", "2000"],
    ["ki-b4.png", "Hediye", "IB4 Kablosuz Kulaklık", "0"]
]
