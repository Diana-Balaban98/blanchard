window.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#btn").addEventListener("click", function () {
      document.querySelectorAll(".developments__item--hidden").forEach(function (Elem) {
        Elem.classList.toggle("overflow");
      });
    });
  })
