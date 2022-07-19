window.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".header__link").forEach(function (Elem) {
    Elem.addEventListener("click", function (event) {
        console.log(event)
        //const dropdown = event.querySelector(".dropdown")
        event.target.classList.toggle("dropdown_block");
    });
  });
});
