function quiz(event) {
    event.preventDefault();
    var soru1Cevap = document.querySelector('input[name="fq1"]:checked').value;
    var soru2Cevap = document.querySelector('input[name="fq2"]:checked').value;
    var soru3Cevap = document.querySelector('input[name="fq3"]:checked').value;
    var soru4Cevap = document.querySelector('input[name="fq4"]:checked').value;
    var soru5Cevap = document.querySelector('input[name="fq5"]:checked').value;
    
    let dogru = false;
    
    if (soru1Cevap == "35mmjack" && soru2Cevap == "kablosuzveri" && soru3Cevap == "gurultu" && soru4Cevap == "aralik" && soru5Cevap == "ferromanyetik") {
        dogru = true;
    }
    
    
    document.querySelector("form").classList.add("hidden");
    if (dogru) {
        document.querySelector(".dogru").classList.remove("hidden");
        sepetiGuncelle(16, 1);
    } else {
        document.querySelector(".yanlis").classList.remove("hidden");
    }
}