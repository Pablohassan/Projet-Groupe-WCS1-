// js relatif à a traduction du site

function switchLanguage(lang) {
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
    // On récupère la langue sélectionnée
    const selectedLanguage = button.dataset.lang;
    // On appelle la fonction de changement de la langue
    // au clic sur le bouton
    button.addEventListener("click", function (event) {
      switchLanguage(event.target.dataset.lang);
    });
  });

// js relatif au formulaire
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
    document.getElementById("contactForm").reset();
  });
const message =
  "Merci pour votre message ! Il a bien été envoyé à l'équipe du Carré. Grazie per il vosto messaggio! È stato inviato alla squadra di Carré";

  // Ferme le menu burger à chaque click sur un lien du menu
document.querySelectorAll(".menu a").forEach(function (element) {
    element.addEventListener("click", function () {
      showMenu(false)
    });
  });

function showMenu(menuOpen) {
    const menu = document.getElementById('menu');

    if (menuOpen) {
        menu.classList.add('menu-show')
        menu.classList.remove('menu-hide')
    } else {
        menu.classList.remove('menu-show')
        menu.classList.add('menu-hide')
    }
}

document.getElementById('menu-button').addEventListener('click', function () {
    showMenu(true);
});


// var desktop= window.matchMedia("(min-width: 600px)");

// if(desktop.matches) {
//     const darwin = document.getElementById("darwin");
//     darwin.src = "assets/logo.png";
//  };

// const onResize = () => {
//     document.querySelectorAll(".responsive-img").forEach((image) => {
//         if (window.innerWidth > 1024) {
//             darwin.src = "assets/logo.png";
//          } else {
//             darwin.src = "assets/activites-darwin2.jpeg";
//          }
//     })
// }

// window.onresize = onResize;

 