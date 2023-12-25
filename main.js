function firsatKalanZaman() {
        var bitisZamani = new Date("2023-12-26T23:00:00");

        var anlikZaman = new Date();

        var fark = bitisZamani - anlikZaman;
        
        var saat = Math.floor(fark / (1000 * 60 * 60));
        var dakika = Math.floor((fark % (1000 * 60 * 60)) / (1000 * 60));
        var saniye = Math.floor((fark % (1000 * 60)) / 1000);
    
        var anlikZaman = anlikZaman.toLocaleTimeString();

        document.querySelector(".kalan-sure").textContent = "Bitiş tarihi: 23:00 26.12.2023 - " + "Anlık zaman: " + anlikZaman + " - Kalan süre: " + saat + "sa " + dakika + "dk " + saniye + "sn";
    }

    firsatKalanZaman();

    setInterval(firsatKalanZaman, 1000);