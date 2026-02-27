const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("navLinks");

menuIcon.addEventListener("click", function () {
    navLinks.classList.toggle("hidden");
});

const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
const form = document.getElementById("form-contact");
const modalBerhasil = document.getElementById("berhasil");
const modalGagal = document.getElementById("gagal");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.querySelector("textarea").value.trim();

    if (name === "" || email === "" || phone === "" || subject === "" || message === "") {
        modalGagal.style.display = "block";
        modalBerhasil.style.display = "none";
        modal.style.display = "block";
    } else {
        modalBerhasil.style.display = "block";
        modalGagal.style.display = "none";
        modal.style.display = "block";
        form.reset();
    }
});

span.onclick = function() {
  modal.style.display = "none";
}

