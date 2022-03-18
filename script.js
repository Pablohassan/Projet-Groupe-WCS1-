const langE1 = document.querySelector(".langWrap");
const link = document.querySelectorAll("a");
const titleE1 = document.querySelector(".title");
const texteE1 = document.querySelector(".texte");

link.forEach(langue => {
  langue.addEventListener('click', () => {
    langE1.querySelector(".active").classList.remove("active");
    langue.classList.add("active");

    const attribut = langue.getAttribute("language");

    titleE1.textContent = data[attribut].title;
    texteE1.textContent = data[attribut].texte;
  });
});

const data = {
  "francais":
  {
    "title": "Bonjour le monde",
    "texte": "Coucou à tous et bienvenue"
  },
  "italiano":
  {
    "title": "Ciao mondo",
    "texte": "Ciao a tutti e benvenuti"
  }
}

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });

const message =
  "Merci pour ton message ! Il a bien été envoyé à l'équipe du Carré";

  
