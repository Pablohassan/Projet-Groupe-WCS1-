// js relatif à a traduction du site
let selectedLanguage = "fr";

function switchLanguage(lang) {
  selectedLanguage = lang;

  document
    .querySelectorAll(`[data-lang]:not(.lang-switch)`)
    .forEach(function (element) {
      if (element.dataset.lang === lang) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    });
}

// On choisit le français par défaut
switchLanguage("fr");

// Pour chaque bouton de sélection d'une langue
document.querySelectorAll(".lang-switch").forEach(function (button) {
  // On appelle la fonction de changement de la langue
  // au clic sur le bouton
  button.addEventListener("click", function (event) {
    switchLanguage(event.target.dataset.lang);
  });
});

// js relatif au formulaire
const formContactMessages = {
  fr: "Merci pour votre message ! Il a bien été envoyé à l'équipe du Carré.",
  it: "Grazie per il vosto messaggio! È stato inviato alla squadra di Carré",
}

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(formContactMessages[selectedLanguage]);
    document.getElementById("contactForm").reset();
  });
const message =
  "Merci pour ton message ! Il a bien été envoyé à l'équipe du Carré. Grazie per il vostro messaggio! È stato inviato alla squadra di Carré";

// Ferme le menu burger à chaque click sur un lien du menu
document.querySelectorAll(".menu a, .nav .logo").forEach(function (element) {
  element.addEventListener("click", function (event) {
    // J'évite que le navigateur scroll automatiquement
    // vers l'élément ciblé par l'ancre du lien
    event.preventDefault();

    const linkHash = new URL(element.href).hash;
    const elementToScrollSelector = !!linkHash ? linkHash : "body";

    document.querySelector(elementToScrollSelector).scrollIntoView({
      behavior: "smooth",
    });

    showMenu(false);
  });
});

const menu = document.getElementById("menu");

function showMenu(menuOpen) {
  menu.classList.toggle("menu-show", menuOpen);
  menu.classList.toggle("menu-hide", !menuOpen);
}

 
