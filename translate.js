// js relatif à a traduction du site

const langE1 = document.querySelector(".langWrap");
const link = document.querySelectorAll("a");
const titleE1 = document.querySelector(".title");
const texteE1 = document.querySelector(".texte");
const texteE2 = document.querySelector(".texte1");
const texteE3 = document.querySelector(".texte2");
const texteE4 = document.querySelector(".texte3");
const titleE2 = document.querySelector(".title2");
const texteE5 = document.querySelector(".texte4");
const texteE6 = document.querySelector(".texte5");
const texteE7 = document.querySelector(".texte6");
const titleE3 = document.querySelector(".title3");
const texteE8 = document.querySelector(".texte7");
const texteE9 = document.querySelector(".texte8");
const texteE10 = document.querySelector(".texte9");
const titleE4 = document.querySelector(".title4");
const texteE11 = document.querySelector(".texte10");
const texteE12 = document.querySelector(".texte11");
const texteE13 = document.querySelector(".texte12");
const titleE5 = document.querySelector(".navbar1");
const titleE6 = document.querySelector(".navbar2");
const titleE7 = document.querySelector(".navbar3");
const titleE8 = document.querySelector(".navbar4");
const titleE9 = document.querySelector(".navbar5");
const titleE10 = document.querySelector(".formTitle");
const texteE14 = document.querySelector(".nom");

link.forEach(langue => {
    langue.addEventListener('click', () => {
        langE1.querySelector("#active").classList.remove("active");
        langue.classList.add("active");

        const attribut = langue.getAttribute("language");

        titleE1.textContent = data[attribut].title;
        texteE1.textContent = data[attribut].texte;
        texteE2.textContent = data1[attribut].texte1;
        texteE3.textContent = data2[attribut].texte2;
        texteE4.textContent = data3[attribut].texte3;
        titleE2.textContent = data4[attribut].title2;
        texteE5.textContent = data4[attribut].texte4;
        texteE6.textContent = data5[attribut].texte5;
        texteE7.textContent = data6[attribut].texte6;
        titleE3.textContent = data7[attribut].title3;
        texteE8.textContent = data7[attribut].texte7;
        texteE9.textContent = data8[attribut].texte8;
        texteE10.textContent = data9[attribut].texte9;
        titleE4.textContent = data10[attribut].title4;
        texteE11.textContent = data10[attribut].texte10;
        texteE12.textContent = data11[attribut].texte11;
        texteE13.textContent = data12[attribut].texte12;
        titleE5.textContent = data13[attribut].navbar1;
        titleE6.textContent = data14[attribut].navbar2;
        titleE7.textContent = data15[attribut].navbar3;
        titleE8.textContent = data16[attribut].navbar4;
        titleE9.textContent = data17[attribut].navbar5;
        titleE10.textContent = data18[attribut].formTitle;
        texteE14.textContent = data19[attribut].nom;
    });
});

const data = {
    "francais":
    {
        "title": "Restaurants",
        "texte": "Que vous soyez de passage sur Bordeaux ou non, voici un site répertoriant quelques bonnes adresses du quartier Bastide. N’hésitez pas à nous faire vos retours sur les endroits que nous avons sélectionnés pour vous !"
    },

    "italiano":
    {
        "title": "Ristoranti",
        "texte": "Che tu sia di passaggio o meno a Bordeaux, ecco un sito che elenca alcuni buoni indirizzi nel quartiere di Bastide. Non esitare a darci il tuo feedback sui luoghi che abbiamo selezionato per te!"
    },
}

const data1 = {
    "francais":
    {
        "texte1": "Installez-vous confortablement et découvrez un lieu chaleureux habité par une cuisine bistronomique de qualité et un personnel professionnel et convivial. Cadre déroutant, emplacement imprenable sur la rive droite de Bordeaux et rooftop surplombant la ville, face à la célèbre Place de la Bourse… Le Siman surprend autant qu’il séduit. C’est dans cette atmosphère unique que nous vous invitons à notre table pour partager un déjeuner ou un dîner. Sans oublier nos brunchs dominicaux!"
    },

    "italiano":
    {
        "texte1": "Mettiti comodo e scopri un luogo accogliente attrezzato di una cucina bistrot di qualità e uno staff professionale e cordiale. Ambiente confuso, con una posizione inespugnabile sulla riva destra di Bordeaux e un tetto che domina la città, di fronte alla famosa Place de la Bourse. Le Siman sorprende tanto quanto seduce. È in questa atmosfera unica che vi invitiamo alla nostra tavola per condividere il pranzo o la cena. Per non parlare dei nostri brunch domenicali!"
    }
}

const data2 = {
    "francais":
    {
        "texte2": "Restaurant Street Food du Cambodge et Bar. Ambiance familiale et accueil chaleureux. Cuisine et sauces faites maison à base de produits frais Tous nos plats sont servis rapidement et se dégustent sur place en salle ou en terrasse. Vous pouvez également les emporter ou vous faire livrer par nos partenaires."
    },
    "italiano":
    {
        "texte2": "Ristorante e bar con cibo di strada cambogiano con ambiente familiare e calda accoglienza. Cucina casalinga e salse a base di prodotti freschi. Tutti i nostri piatti vengono serviti velocemente e possono essere consumati nella sala da pranzo o in terrazza. Puoi anche portarli via o farteli consegnare dai nostri partner."
    }
}

const data3 = {
    "francais":
    {
        "texte3": "Le Wasabi Café est l'un des plus anciens restaurants japonais de Bordeaux, créé en 2003. Notre credo : vous proposer des plats typiquement japonais à partir de produits frais et de qualité tout au long de l'année. Notre objectif : vous proposer un voyage à travers la gastronomie japonaise. Nos chefs expérimentés et notre carte de vins et boissons rendront cette expérience unique."
    },
    "italiano":
    {
        "texte3": "Il Wasabi Café è uno dei più antichi ristoranti giapponesi di Bordeaux, nato nel 2003. Il nostro credo: offrirti piatti tipici giapponesi con prodotti freschi e di qualità durante tutto l'anno. Il nostro obiettivo: offrirti un viaggio attraverso la gastronomia giapponese. I nostri chef esperti e la nostra carta dei vini e delle bevande renderanno questa esperienza unica."
    }
}

const data4 = {
    "francais":
    {
        "title2": "Bars",
        "texte4": "Le meilleur Pub pour s’ambiancer sur la rive droite de Bordeaux, situé a 200 mètres de l’arrêt Stalingrad. En terrasse, profitez des superbes couchers de soleil sur la Garonne ou à l'intérieur avec une ambiance des plus « british ». Allez y pendent les happy hour, pour leurs grande variété de bières et leurs tapas, et restez y pour manger : le service continue jusqu'à 2 heures."
    },
    "italiano":
    {
        "title2": "Barre",
        "texte4": "Il miglior Pub per divertirsi sulla riva destra di Bordeaux, situato a 200 metri dalla fermata Stalingrad. Sulla terrazza, goditi gli splendidi tramonti sulla Garonna o all'interno con un'atmosfera molto « british ». Andateci durante l'happy hour, per la loro ampia varietà di birre e tapas, e restate lì a mangiare: il servizio continua fino alle 2 del mattino."
    }
}

const data5 = {
    "francais":
    {
        "texte5": "Si vous aimez danser sur de la musique Live, savourer votre repas « à la bonne franquette » dans une ambiance typique du folklore français n’hesitez pas à faire un tour chez Alric, on y va seul, en amoureux, entre amis ou en famille. On se retrouve autour d’un verre ou d’un plat simple, on s’égaye sous les lampions au fil de l’eau, on se croise, se rencontre et la magie s’opère doucement. La musique résonne, caresse les papilles auditives et invite chacun à partager ce fragile instant de grâce. Ils vous aceuillent du printemps jusqu'à la fin de l’automne."
    },
    "italiano":
    {
        "texte5": "Se ti piace ballare con musica dal vivo, assaporare il tuo pasto « à la bonne franquette » in un'atmosfera tipica del folklore francese, non esitare a visitare Alric: si va da soli, in coppia, con gli amici o la famiglia. Ci si incontra attorno a un drink o un semplice piatto, ci si rallegra sotto le lanterne sull'acqua, ci si incrocia, ci si incontra e la magia avviene lentamente. La musica risuona, accarezza le papille gustative uditive e invita tutti a condividere questo fragile momento di grazia. Si è accolti dalla primavera fino alla fine dell'autunno."
    }
}

const data6 = {
    "francais":
    {
        "texte6": "Offrez-vous un moment de détente dans cet ancien chantier naval datant de 1902 dans lequel on construisait des bateaux en bois. Sa brasserie élabore une gamme de bières 100 % bio produites à base de céréales bio cultivées et maltées dans le Sud-Ouest. Tout ça sans oublier sa plage, un must de farniente inattendu sur les rives de Garonne."
    },
    "italiano":
    {
        "texte6": "Regalati un momento di relax in questo ex cantiere navale del 1902 dove venivano costruite barche di legno. Il suo birrificio produce una gamma di birre biologiche al 100% prodotte da cereali biologici coltivati ​​e maltati nel sud-ovest. Tutto questo senza dimenticare la sua spiaggia, tappa obbligata per ozio inaspettato sulle rive della Garonna."
    }
}

const data7 = {
    "francais":
    {
        "title3": "Activités culturelles",
        "texte7": "Darwin est un lieu alternatif de la rive-droite de Bordeaux. Cette ancienne caserne désaffectée est aujourd’hui éco-réhabilitée. Sur plus de 3 hectares, Darwin organise la collaboration entre les acteurs du territoire contribuant à la transition vers des modèles de société plus coopératifs et résilients. Pans entiers de murs dédiés au street-art, skate-park, restaurant et épicerie bio,ferme urbaine, espaces de coworking, pépinière d’entreprises, ateliers de réparation de vélos, club et terrain de roller-derby, salles de conférences, concerts… Darwin est un véritable écosystème où chaque jour plus d’un millier de personnes s’y croisent."
    },
    "italiano":
    {
        "title3": "Attività culturali",
        "texte7": "Darwin è un luogo alternativo sulla riva destra di Bordeaux. Questa ex caserma in disuso è ora eco-riabilitata. Su più di 3 ettari, Darwin organizza la collaborazione tra gli attori del territorio contribuendo alla transizione verso modelli di società più cooperativi e resilienti. Ci sono intere sezioni di pareti dedicate alla street-art, uno skate-park, un ristorante e negozio di alimentari biologici, l’urban farm, spazi di coworking, un’incubatore aziendale, officine di riparazione per biciclette, un roller-derby club, sale conferenze e concerti. Darwin è un vero ecosistema dove ogni giorno si incontrano più di 1000 persone."
    }
}

const data8 = {
    "francais":
    {
        "texte8": "Installé dans l'ancienne gare terminus du train Paris-Orléans, le Mégarama est un cinéma multi-salles de la rive droite, avec café, vente de friandises et boissons. Outre la diffusion des sorties de films français et étrangers, vous y retrouvez la saison « Connaissance du Monde ». Films populaires et films à grands spectacles. Avant-premières avec venues d'acteurs de cinéma."
    },
    "italiano":
    {
        "texte8": "Installato nell'ex stazione capolinea del treno Parigi-Orléans, il Mégarama è un cinema multisala sulla riva destra con caffetteria, vendita di dolci e bevande. Oltre alla proiezione delle uscite cinematografiche francesi e straniere, troverai lì la stagione « Connaissance du Monde ». Film popolari e di successo e anteprime con l’apparizione di attori cinematografici."
    }
}

const data9 = {
    "francais":
    {
        "texte9": "La Maison cantonale est un lieu à vocation polyvalente. Entièrement rénovée entre 2001 et 2006, cet édifice de style Art Nouveau a été distingué par un Ruban du patrimoine. Elle a accueilli un prétoire, une bibliothèque, un commissariat et la mairie de quartier. Aujourd'hui elle accueille des manifestations : des spectacles, des conférences, des réunions de quartiers et des activités associatives."
    },
    "italiano":
    {
        "texte9": "La Maison cantonale è un luogo polivalente. Interamente ristrutturato tra il 2001 e il 2006, questo edificio in stile Art Nouveau è stato insignito dell'Heritage Ribbon. Ospitava un'aula di tribunale, una biblioteca, una stazione di polizia e il municipio distrettuale. Oggi ospita eventi,  spettacoli, convegni, incontri di quartiere e attività associative."
    }
}

const data10 = {
    "francais":
    {
        "title4": "Parcs",
        "texte10": "Le Jardin Botanique est une institution créée pour sensibiliser le public aux plantes, à la biodiversité, la nature et la gestion durable des ressources. Le but exposé est de conserver le vert. Ce lieu représente une opportunité pour maintenir le statut zen, donc le silence et la tranquilité d'esprit."
    },
    "italiano":
    {
        "title4": "Parchi",
        "texte10": "Jardin Botanique è un'istituzione nata per sensibilizzare l'opinione pubblica sulle piante, sulla biodiversità, sulla natura e sulla gestione sostenibile delle risorse. L'obiettivo dichiarato è preservare il verde. Questo luogo rappresenta un'opportunità per mantenere lo stato zen, quindi il silenzio e la tranquillità."
    }
}

const data11 = {
    "francais":
    {
        "texte11": "Le parc aux Angéliques et un lieu joli pour faire des promenades en restant en contact avec la nature et faire des piques-niques avec la famille ou les amis. Le parc tient son nom d'une fleur qui représente l'inspiration et la passion."
    },
    "italiano":
    {
        "texte11": "Parc aux Angéliques è un bel posto dove fare passeggiate rimanendo a contatto con la natura e fare picnic con la famiglia o gli amici. Il parco prende il nome da un fiore che rappresenta l’ispirazione e la passione."
    }
}

const data12 = {
    "francais":
    {
        "texte12": "Le parc Pinçon est un espace vert situé au coeur du quartier Bastide où les enfants peuvent jouer avec les structures de jeux. Ce lieu fait partie du projet pour replanter des arbres, conserver les différentes espèces et réduire l'effet de serre."
    },
    "italiano":
    {
        "texte12": "Parc Pinçon è uno spazio verde situato nel cuore del quartiere Bastide dove i bambini possono giocare con le strutture ludiche. Questo luogo fa parte del progetto per ripiantare alberi, preservare le diverse specie e ridurre l'effetto serra."
    }
}

const data13 = {
    "francais":
    {
        "navbar1": "Restaurants"
    },

    "italiano":
    {
        "navbar1": "Ristoranti"
    }
}

const data14 = {
    "francais":
    {
        "navbar2": "Bars"
    },

    "italiano":
    {
        "navbar2": "Barre"
    }
}

const data15 = {
    "francais":
    {
        "navbar3": "Activités culturelles"
    },

    "italiano":
    {
        "navbar3": "Attività culturali"
    }
}

const data16 = {
    "francais":
    {
        "navbar4": "Parcs"
    },

    "italiano":
    {
        "navbar4": "Parchi"
    }
}

const data17 = {
    "francais":
    {
        "navbar5": "Nous contacter"
    },

    "italiano":
    {
        "navbar5": "Contattaci"
    }
}

const data18 = {
    "francais":
    {
        "formTitle": "Contacte-nous"
    },

    "italiano":
    {
        "formTitle": "Contattaci"
    }
}

const data19 = {
    "francais":
    {
        "nom": "Ton nom :"
    },
    "italiano":
    {
        "nom": "Il tuo nome :"
    }
}

const data20 = {
    "francais":
    {
        "nom": "Ton nom :"
    },
    "italiano":
    {
        "nom": "Il tuo nome :"
    }
}

const data21 = {
    "francais":
    {
        "nom": "Ton nom :"
    },
    "italiano":
    {
        "nom": "Il tuo nome :"
    }
}

// js relatif au formulaire
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });
const message =
  "Merci pour ton message ! Il a bien été envoyé à l'équipe du Carré";

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