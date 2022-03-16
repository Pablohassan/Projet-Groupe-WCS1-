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
    // "title": "Bonjour le monde",//
    "texte": "Que vous soyez de passage sur Bordeaux ou non, voici un site répertoriant quelques bonnes adresses du quartier Bastide. N’hésitez pas à nous faire vos retours sur les endroits que nous avons sélectionnés pour vous !"
  },
  "italiano":
  {
    //"title": "Ciao mondo",//
    "texte": "Che tu sia di passaggio o meno per Bordeaux, ecco un sito che elenca alcuni buoni indirizzi nel quartiere della Bastide. Non esitare a darci il tuo feedback sui luoghi che abbiamo selezionato per te!"
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
