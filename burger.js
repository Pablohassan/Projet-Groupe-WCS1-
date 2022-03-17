// Ferme le menu burger à chaque click sur un lien du menu
document.querySelectorAll(".menu a").forEach(function (element) {
  element.addEventListener("click", function () {
    document.querySelector("#toggle").checked = false;
  });
});
