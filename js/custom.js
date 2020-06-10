// fonction qui renvoie un nombre random entre min et max
function randomisation(min , max) {
    return Math.floor((Math.random() * (max-min+1)) + min);
};

// fonction qui crée une chaine de caractères random de la taille désirée
function generationRef(longueur) {
    var chaine ='';
    var characteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var characteresLongueur = characteres.length;
    for(var i=0;i<longueur;i++)
    {
        chaine += characteres.charAt(Math.floor(Math.random()*characteresLongueur));
    }
    return chaine;
};

// fonction qui crée une chaine avec en entrée une chaine de base et deux nombres pour utilisation fonction précédente
function generationNom(nom, min, max) {
    var chaine = nom;
    chaine += randomisation(min,max);
    return chaine;
};

// fonction qui prend aléatoirement une image dans la base donnée (sous le format img*1.jpg)
function generationImage(nom) {
    var chaine = nom;
    chaine += randomisation(1,8)+'1.jpg';
    return chaine;
};

// ensemble de listes de propriétés où on va choisir aléatoirement une valeur pour créer les objets
var OS = ['Windows 10','Linux','MacOS','Windows 7','ChromeOs'];
var stockage = ['2 To','500 Go','1 To','250 Go'];
var mem = ['8 Go','4 Go','2 Go','16 Go'];
var tailleecran = ['13','14','15','16','17'];
var proco = ['Intel Core i3','Intel Core i5','Intel Core i7','Intel Core i9','AMD Ryzen 3 3200','AMD Ryzen 5 3500','AMD Ryzen 7 4600H'];
var resol = ['1920 x 1080 (Full HD)','1366 x 768 (WXGA)','1440 x 900','1600 x 900 (HD+)','2560 x 1440 (QHD)','2560 x 1600 (WQHD)','3840 x 2160 (Ultra HD)'];
var poids = ['1,50Kg','1,60Kg','1,85Kg','2,00Kg','1,90Kg','1,35Kg'];
var carteg = ['AMD Radeon RX 5500M','Chipset AMD','Chipset Intel','Nvidia GeForce GTX 1050','Nvidia GeForce GTX 1060','Nvidia GeForce GTX 1650 Ti','Nvidia GeForce GTX 1660 Ti','Nvidia GeForce RTX 2060','Nvidia GeForce RTX 2070','Nvidia GeForce RTX 2070 SUPER','Nvidia GeForce RTX 2080'];
var connectique = ['USB','HDMI','Audio','Ethernet'];
var connectivite = ['Wifi','Bluetooth'];
var freqram = ['2133Mhz','2400Mhz','2666Mhz','3000Mhz'];
var freqproc = ['1.5Ghz','1.7Ghz','2.1Ghz','2.4Ghz'];
var typeram = ['DDR3','DDR4'];
var ouinon = ['Oui','Non'];

const dummy = {
    "nom" : "ordinateur 1",
    "ref" : "123456789",
    "img" : "images/img81.jpg",
    "os" : "Windows 10",
    "ecran" : {
        "taille" : '14"',
        "resolution" : "1920 x 1080 (Full HD)"
    },
    "stockage" : "2 To",
    "ram" : {
        "quantitee" : "8 Go",
        "frequence" : "2400Mhz",
        "type" : "DDR4"
    },
    "processeur" : {
        "type" : "Intel Core i3",
        "frequence" : "1,5Ghz"
    },
    "prix" : 2000,
    "connectique" : {
        "usb" : 4,
        "ethernet" : "Non",
        "hdmi" : 1,
        "audio" : "Oui"
    },
    "connectivite" : {
        "Wifi" : "Oui",
        "Bluetooth" : "Oui"
    }
};

function genererObjet() {
    return {"nom" : generationNom('Ordinateur ',1,150),
    "ref" : generationRef(7),
    "img" : generationImage('images/img'),
    "os" : genererChaine(OS),
    "ecran" : {
        "taille" : genererChaine(tailleecran),
        "resolution" : genererChaine(resol),
    },
    "stockage" : genererChaine(stockage),
    "ram" : {
        "quantitee" : genererChaine(mem),
        "frequence" : genererChaine(freqram),
        "type" : genererChaine(typeram)
    },
    "processeur": {
        "type" : genererChaine(proco),
        "frequence" : genererChaine(freqproc)
    },
    "prix": randomisation(500,2500),
    "connectique" : {
        "usb" : randomisation(1,4),
        "ethernet" : genererChaine(ouinon),
        "hdmi" : randomisation(1,2),
        "audio" : genererChaine(ouinon)
    },
    "connectivite" : {
        "Wifi" : genererChaine(ouinon),
        "BT" : genererChaine(ouinon)
    }};
}

// fonction qui prend en parametre une liste et renvoie un élément de cette liste aléatoirement
function genererChaine(liste) {
    return liste[randomisation(0,liste.length-1)];
}

// fonction de test pour le localStorage
function generateLog() {
    console.log(localStorage);
};

// fonction appelée au moment du clic du bouton "Fermer comparatif"
function fermerComparatif() {
    document.getElementById("conteneur").style.display = "";
    //document.getElementById("filtre").style.display = "";
    document.getElementById("comparer").style.display = "none";
    document.getElementById("buttoncompare").style.display = "";
    document.getElementById("buttonfermer").style.display ="none";
    document.getElementById("buttonvider").style.display = "";
};

// fonction qui vérifie le nombre de cases checkbox cochées et alerte l'utilisateur de la présence de trop d'éléments
function onClick(id){
    var btn = document.getElementById("buttoncompare");
    var cnt = document.getElementById("counter");
    var vid = document.getElementById("buttonvider");
    var nbcoche = document.querySelectorAll('input[type="checkbox"]:checked').length;
    //var liste2 = document.querySelectorAll('input[type="checkbox"]');
    const MAX = 5;
    if(nbcoche ===0)
    {
        btn.style.display ="none";
        cnt.innerHTML = '';
    }
    else if(nbcoche <=MAX)
    {
        btn.style.display = "";
        vid.style.display = "";
        cnt.innerHTML = nbcoche;
    }
    else
    {
        alert("Choix de 5 produits maximum");
        document.getElementById(id).checked = false;
    }
};

function viderCheckBox() {
    var btn = document.getElementById("buttoncompare");
    var cnt = document.getElementById("counter");
    var vid = document.getElementById("buttonvider");
    var liste = document.querySelectorAll('input[type="checkbox"]');
    btn.style.display ="none";
    vid.style.display = "none";
    cnt.innerHTML = '';
    for(var i =0;i<liste.length;i++)
    {
        liste[i].checked = false;
    }
}
// fonction appelée en clic du bouton Comparer
// qui affecte le code html au div caché de comparaison
// et affiche/cache les bons div
function afficherComparatif()
{
    var listecochee = [];
    var liste = document.querySelectorAll('input[type="checkbox"]');
    for(var i= 0; i<liste.length; i++)
    {
        if(liste[i].checked)
        {
            listecochee.push(liste[i].id)
        }
    }
    if (listecochee.length < 2)
    {
        alert("Veuillez sélectionner plus d'un produit");
    }
    else
    {
        document.getElementById("comparer").innerHTML = genererCardComparatif(listecochee);
        document.getElementById("comparer").style.display = "";
        document.getElementById("conteneur").style.display = "none";
        //document.getElementById("filtre").style.display = "none";
        document.getElementById("buttoncompare").style.display ="none";
        document.getElementById("buttonfermer").style.display ="";
        document.getElementById("buttonvider").style.display =  "none";
    }
};

// fonction qui crée une liste aléatoirement de produit avec les propriétés
// et les fonctions choisissant les propriétés
function creerListeProduits() {
    var x = randomisation(10, 25);
    var liste = [];
    for(i=0;i<x;i++)
    {
        liste.push(genererObjet());
        //liste.push({"nom": generationNom('Ordinateur ',1,50),"ref": generationRef(7),"img": generationImage('images/img'), "os": genererChaine(OS), "taille": genererChaine(ecran), "stockage": genererChaine(stockage), "ram": genererChaine(mem), "processeur": genererChaine(proco), "prix": randomisation(500,2500),})
    }
    return liste;
};

function genererDivCard(item) {
    html = '';
    html += '<div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-12" id="card_'+item.ref+'">';
    html += '<div class="pt-1 pb-1">';
    html += '<div class="card shadow">';
    html += '<div class="card-header h-25 bg-primary text-white">';
    html += '<div class="card-title">'+item.nom+'</div>';
    html += '<div class="card-subtitle text-muted">Référence : '+item.ref+'</div>';
    html += '<form class="cbComparer"><div class="checkbox"><input type="checkbox" onclick="onClick(this.id)" id="'+item.ref+'"></div></form>';
    html += '<button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#exampleModalCenter" data-whatever="'+item.ref+'">Fiche complète</button></div>';
    html += '<ul class="list-group list-group-flush">';
    html += '<li class="list-group-item">Prix : '+item.prix+' $</li>';
    html += '<li class="list-group-item">Taille de '+"l'écran : "+item.ecran.taille+'"</li>';
    html += '<li class="list-group-item">Système '+"d'exploitation : "+item.os+'</li>';
    html += '<li class="list-group-item">Stockage : '+item.stockage+'</li>';
    html += '<li class="list-group-item">Mémoire vive : '+item.ram.quantitee+'</li>';
    html += '<li class="list-group-item">Processeur : '+item.processeur.type+'</li></ul>';
    html += '<div class="card-body text-center"><img src='+item.img+' class="card-img-top"></div>'
    html += '</div></div></div>';
    return html;
}
// générateur de code html en utilisant une liste de produits créée par la fonction précédente
// utilisation du template de base design présent dans la page html
function genererCard(liste) {
    var html ='';
    for(var i = 0; i<liste.length;i++)
    {
        html += genererDivCard(liste[i]);
    }
    return html;
};

function genererTable(item) {
    html = '';
    html += '<table class="table-striped table-sm table-hover table table-bordered">';
    html += '<tr><td>Processeur</td><td><ul><li>'+item.processeur.type+'</li>';
    html += '<li>'+item.processeur.frequence+'</li></ul></td></tr>';
    html += '<tr><td>Mémoire</td><td><ul>';
    html += '<li>'+item.ram.type+'</li><li>'+item.ram.frequence+'</li><li>'+item.ram.quantitee+'</li></ul></td></tr>';
    html += '<tr><td>Ecran</td><td><ul>';
    html += '<li>'+item.ecran.taille+'</li><li>'+item.ecran.resolution+'</li></ul></td></tr>';
    html += '<tr><td>Stockage</td><td><ul><li>'+item.stockage+'</li></ul></td></tr>';
    html += "<tr><td>Système d'exploitation</td><td><ul>";
    html += '<li>'+item.os+'</li></ul></td></tr>';
    html += '<tr><td>Connectique</td><td><ul>';
    html += '<li>Nombre de ports USB : '+item.connectique.usb+'</li>';
    html += '<li>Port RJ45 : '+item.connectique.ethernet+'</li>';
    html += '<li>Connecteur HDMI : '+item.connectique.hdmi+'</li>';
    html += '<li>Connecteur audio : '+item.connectique.audio+'</li></ul></td></tr>';
    html += '<tr><td>Connectivité</td><td><ul>';
    html += '<li>Wifi : '+item.connectivite.Wifi+'</li>';
    html += '<li>Bluetooth : '+item.connectivite.BT+'</li></ul></td></tr></table>';
    return html;
}

// fonction qui génère le code de la comparaison de produits dans un div caché
// en fonction de la liste qu'on lui fournit (ici une liste de Ref/id, que l'on va croiser
// avec la liste de produits générés au démarrage)
// choisit les bonnes tailles de colonnes en fonction du nombre de produits choisis
function genererCardComparatif(liste) {
    var liste2 = [];
    for(var i=0;i<liste.length;i++)
    {
        //{liste2.push(listeProduits.find(elem => elem.ref === liste[i]));}
        liste2.push(JSON.parse(localStorage.getItem(liste[i])))
    }
    var html ='';
    for(var i = 0; i<liste2.length;i++)
    {
        if (liste2.length===2)
        {
            /*html += '<div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">';*/
            html += '<div class="col-lg-6">'
        }
        else if(liste2.length===3)
        {
            /*html += '<div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">';*/
            html += '<div class="col-lg-4">'
        }
        else if(liste2.length===4 || liste2.length===5)
        {
            /*html += '<div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">';*/
            html += '<div class="col-lg-3">'
        }
        html += '<div class="pt-1 pb-1">';
        html += '<div class="card shadow">';
        html += '<div class="card-header h-25 bg-primary">';
        html += '<div class="card-title text-white">'+liste2[i].nom+'</div>';
        html += '<div class="card-subtitle text-muted">Référence : '+liste2[i].ref+'</div></div>';
        html += genererTable(liste2[i]);
        html += '<div class="card-body text-center"><img src='+liste2[i].img+' class="card-img-top"></div>'
        html += '</div></div></div>';
    }
    return html;
}

window.onload = function() {
    if(!localStorage.getItem('dummy')){
        window.localStorage.setItem('dummy',JSON.stringify(dummy));
        listeProduits = creerListeProduits();
        document.getElementById("conteneur").innerHTML = genererCard(listeProduits);
        for (var index = 0; index < listeProduits.length; index++)
        {
            window.localStorage.setItem(listeProduits[index].ref,JSON.stringify(listeProduits[index]));
        }
    }
    else
    {
        var listeProduits = [];
        Object.keys(window.localStorage).forEach(key => {
            listeProduits.push(JSON.parse(window.localStorage.getItem(key)));
        })
        document.getElementById("conteneur").innerHTML = genererCard(listeProduits);
    }
    $('#exampleModalCenter').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget)
        var recipient = button.data('whatever')
        var produit = listeProduits.find(elem => elem.ref === recipient)
        var modal = $(this)
        modal.find('.modal-title').text(produit.nom)
        modal.find('.proc').text(produit.processeur.type)
        modal.find('.freqproc').text(produit.processeur.frequence)
        modal.find('.osnom').text(produit.os)
        modal.find('.ramnom').text(produit.ram.type)
        modal.find('.ramfreq').text(produit.ram.frequence)
        modal.find('.ramqte').text(produit.ram.quantitee)
        modal.find('.tailleecran').text(produit.ecran.taille)
        modal.find('.resolecran').text(produit.ecran.resolution)
        modal.find('.listockage').text(produit.stockage)
        modal.find('.osnom').text(produit.os)
        modal.find('.connectusb').text('Nombre de ports USB : '+produit.connectique.usb)
        modal.find('.connectethernet').text('Port RJ45 : '+produit.connectique.ethernet)
        modal.find('.connecthdmi').text('Connecteur HDMI : '+produit.connectique.hdmi)
        modal.find('.connectaudio').text('Connecteur audio : '+produit.connectique.audio)
        modal.find('.connectiwifi').text('Wifi : '+produit.connectivite.Wifi)
        modal.find('.connectibt').text('Bluetooth : '+produit.connectivite.BT)
    });
    
    $('#bttop').click(function() {
        $('html, body').animate({
          scrollTop: 0
        }, 1000,'swing');
        return false;
    });
};

window.onscroll = function()
{   
    if(document.body.scrollTop > 150 || document.documentElement.scrollTop > 150)
    {
        document.getElementById("bttop").style.display = "";
    }
    else
    {
        document.getElementById("bttop").style.display = "none";
    }
}

