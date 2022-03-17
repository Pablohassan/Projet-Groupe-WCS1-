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

link.forEach(langue => {
    langue.addEventListener('click', () => {
        langE1.querySelector(".active").classList.remove("active");
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
        "texte": "Che tu sia di passaggio o meno per Bordeaux, ecco un sito che elenca alcuni buoni indirizzi nel quartiere della Bastide. Non esitare a darci il tuo feedback sui luoghi che abbiamo selezionato per te!"
    },
}

const data1 = {
    "francais":
    {
        "texte1": "Installez-vous confortablement et découvrez un lieu chaleureux habité par une cuisine bistronomique de qualité et un personnel professionnel et convivial. Cadre déroutant, emplacement imprenable sur la rive droite de Bordeaux et rooftop surplombant la ville, face à la célèbre Place de la Bourse… Le Siman surprend autant qu’il séduit. C’est dans cette atmosphère unique que nous vous invitons à notre table pour partager un déjeuner ou un dîner. Sans oublier nos brunchs dominicaux!"
    },

    "italiano":
    {
        "texte1": "Mettiti comodo e scopri un luogo accogliente abitato da una cucina bistrot di qualità e da uno staff professionale e cordiale. Ambiente confuso, posizione inespugnabile sulla riva destra di Bordeaux e tetto che domina la città, di fronte alla famosa Place de la Bourse... Le Siman sorprende tanto quanto seduce. È in questa atmosfera unica che vi invitiamo alla nostra tavola per condividere un pranzo o una cena. Per non parlare dei nostri brunch domenicali!"
    }
}

const data2 = {
    "francais":
    {
        "texte2": "Restaurant Street Food du Cambodge et Bar. Ambiance familiale et accueil chaleureux. Cuisine et sauces faites maison à base de produits frais Tous nos plats sont servis rapidement et se dégustent sur place en salle ou en terrasse. Vous pouvez également les emporter ou vous faire livrer par nos partenaires."
    },
    "italiano":
    {
        "texte2": "Ristorante e bar con cibo di strada cambogiano. Ambiente familiare e calda accoglienza. Cucina casalinga e salse a base di prodotti freschi Tutti i nostri piatti vengono serviti velocemente e possono essere consumati in loco nella sala da pranzo o in terrazza. Puoi anche portarli via o farteli consegnare dai nostri partner."
    }
}

const data3 = {
    "francais":
    {
        "texte3": "Le Wasabi Café est l'un des plus anciens restaurants japonais de Bordeaux, créé en 2003. Notre credo : vous proposer des plats typiquement japonais à partir de produits frais et de qualité tout au long de l'année. Notre objectif : vous proposer un voyage à travers la gastronomie japonaise. Nos chefs expérimentés et notre carte de vins et boissons rendront cette expérience unique."
    },
    "italiano":
    {
        "texte3": "Il Wasabi Café è uno dei più antichi ristoranti giapponesi di Bordeaux, creato nel 2003. Il nostro credo: offrirti piatti tipici giapponesi con prodotti freschi e di qualità durante tutto l'anno. Il nostro obiettivo: offrirti un viaggio attraverso la gastronomia giapponese. I nostri chef esperti e la nostra carta dei vini e delle bevande renderanno questa esperienza unica."
    }
}

const data4 = {
    "francais":
    {
        "title2": "Bars",
        "texte4": ""
    },
    "italiano":
    {
        "title2": "Barre",
        "texte4": ""
    }
}

const data5 = {
    "francais":
    {
        "texte5": ""
    },
    "italiano":
    {
        "texte5": ""
    }
}

const data6 = {
    "francais":
    {
        "texte6": ""
    },
    "italiano":
    {
        "texte6": ""
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
        "texte7": "Darwin è un luogo alternativo sulla riva destra di Bordeaux. Questa ex caserma in disuso è ora eco-riabilitata. Su più di 3 ettari, Darwin organizza la collaborazione tra gli attori del territorio contribuendo alla transizione verso modelli di società più cooperativi e resilienti. Intere sezioni di pareti dedicate alla street-art, skate-park, ristorante e negozio di alimentari biologici, urban farm, spazi di coworking, incubatore d'impresa, officine di riparazione biciclette, roller-derby club e terreno, sale conferenze, concerti…Darwin è un vero ecosistema dove ogni giorno si incontrano più di mille persone."
    }
}

const data8 = {
    "francais":
    {
        "texte8": "Installé dans l'ancienne gare terminus du train Paris-Orléans, le Mégarama est un cinéma multi-salles de la rive droite, avec café, vente de friandises et boissons. Outre la diffusion des sorties de films français et étrangers, vous y retrouvez la saison « Connaissance du Monde ». Films populaires et films à grands spectacles. Avant-premières avec venues d'acteurs de cinéma."
    },
    "italiano":
    {
        "texte8": "Installato nell'ex stazione capolinea del treno Parigi-Orléans, il Mégarama è un cinema multisala sulla riva destra, con caffetteria, vendita di dolci e bevande. Oltre alla trasmissione delle uscite cinematografiche francesi e straniere, troverai lì la stagione « Connaissance du Monde ». Film popolari e film di successo. Anteprime con apparizioni di attori cinematografici."
    }
}

const data9 = {
    "francais":
    {
        "texte9": "La Maison cantonale est un lieu à vocation polyvalente. Entièrement rénovée entre 2001 et 2006, cet édifice de style Art Nouveau a été distingué par un Ruban du patrimoine. Elle a accueilli un prétoire, une bibliothèque, un commissariat et la mairie de quartier. Aujourd'hui elle accueille des manifestations : des spectacles, des conférences, des réunions de quartiers et des activités associatives."
    },
    "italiano":
    {
        "texte9": "La Casa Cantonale è un luogo polivalente. Interamente ristrutturato tra il 2001 e il 2006, questo edificio in stile Art Nouveau è stato insignito dell'Heritage Ribbon. Ospitava un'aula di tribunale, una biblioteca, una stazione di polizia e il municipio distrettuale. Oggi ospita eventi: spettacoli, convegni, incontri di quartiere e attività associative."
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
        "texte10": "L'Orto Botanico è un'istituzione nata per sensibilizzare l'opinione pubblica sulle piante, la biodiversità, la natura e la gestione sostenibile delle risorse. L'obiettivo dichiarato è mantenere il green. Questo luogo rappresenta un'opportunità per mantenere lo stato Zen, quindi silenzio e tranquillità."
    }
}

const data11 = {
    "francais":
    {
        "texte11": "Le parc aux Angéliques et un lieu joli pour faire des promenades en restant en contact avec la nature et faire des piques-niques avec la famille ou les amis. Le parc tient son nom d'une fleur qui représente l'inspiration et la passion."
    },
    "italiano":
    {
        "texte11": "Parc aux Angéliques è un bel posto dove fare passeggiate rimanendo a contatto con la natura e fare picnic con la famiglia o gli amici. Il parco prende il nome da un fiore che rappresenta ispirazione e passione."
    }
}

const data12 = {
    "francais":
    {
        "texte12": "Le parc Pinçon est un espace vert situé au coeur du quartier Bastide où les enfants peuvent jouer avec les structures de jeux. Ce lieu fait partie du projet pour replanter des arbres, conserver les différentes espèces et réduire l'effet de serre."
    },
    "italiano":
    {
        "texte12": "Pinçon Park è uno spazio verde situato nel cuore del quartiere Bastide dove i bambini possono giocare con strutture ludiche. Questo luogo fa parte del progetto di ripiantare alberi, preservare le diverse specie e ridurre l'effetto serra."
    }
}