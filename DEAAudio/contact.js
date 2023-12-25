const form = document.querySelector("form");
const iletildi = document.querySelector(".iletildi");

function gonder() {
    form.classList.add("hidden");
    iletildi.classList.remove("hidden");
}
