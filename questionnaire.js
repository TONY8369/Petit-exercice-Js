// Création des intéractions en javascript //

// je  selectionne tout mes data types
const choix = document.querySelectorAll('[data-choix-type]');
    choix.forEach
(choix =>
        {
            // lorsque je click sur les data choix types ma fonction selectionner réponse se met en place pour sélèctionner une réponse parmi les troix choix
            choix.addEventListener("click",selectionnerReponse);
        }
);

    function selectionnerReponse()
    {
        // je récupère la valeur de data-choix-type sur lequel j'ai cliqué
        let choixtype = this.dataset.choixType;
        //let choixtype = 1;
        // selectionner touts les reponses du groupe sur lequel tu as cliqué
        let mongroupe = document.querySelectorAll("[data-choix-type='"+choixtype+"']");
        mongroupe.forEach
        (element =>
            {
                // j'enlève la class active
                element.classList.remove("active");
            }
        );
        // j'attribut la class active pour la couleur aqua de ma réponse sélectionner
        this.classList.add("active");
    }

// je sélèctionne tout mes li
let questions = document.querySelectorAll('li');
    questions.forEach(question =>
    {
        // quand on click sur la réponse choisi sa va valider le choix avec data-choix true et sa va enregistrer le nombre de réponse vrai et fausse
        question.addEventListener("click",choisirReponse);
    })
    function choisirReponse()
    {
        this.dataset.choix = this.dataset.choix == "true" ? "false" : "true";
        calculNombreReponse()
    }

    function calculNombreReponse()
    {
        // je récupère la valeur de data-valeur-type sur lequel j'ai cliqué
        //let choixValeur = this.dataset.valeurType
        // sélectionne toute les réponses sur lequel l'utilisateur à cliquez data-choix = true
        
        const nombreReponse = document.querySelectorAll('li[data-choix="true"]').length
        if(nombreReponse == 10)
        {
            let check = document.querySelector(".check")
            // j'ajoute une class active à ma class check
            document.querySelector(".check").classList.add("active")
            // je crée la variable resultat
            let result = document.querySelector("#resultats")
            // lorsque je click sur ma class check
            check.addEventListener("click", e =>
            {
                // j'ajoute la class active à mon id resultats qui est à coté de ma class titre
                result.classList.add("active")
                // je crée mon compteur et je l'incrémente
                let compteur = 0;
                document.querySelectorAll('li[data-choix="true"]').forEach(element => 
                {
                    // si l' element de ma valeur type est vrai
                    if(element.dataset.valeurType == "true") 
                    {
                        // je met +1 à mon compteur
                        // et je créé la class vrai
                        compteur++
                        element.classList.add("vrai")
                    }
                    // sinon
                    else
                    {
                        // je créé la class faux
                        element.classList.add("faux")
                    }
                    console.log(element.dataset.valeurType)
                });
                console.log(compteur)
                // j'affiche mon score de bonne réponse dans mon id résultat
                document.getElementById("resultats").innerHTML = ("( " + compteur + " /10)");
                // pour remonter en haut de la page lorsque j'ai valider mes réponses et voir directement mon score
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
                // je fait apparaitre ma correction en ajoutant une class actif à tout mes correctif
                document.querySelectorAll("p.correctif").forEach(e => e.classList.add('active'))
            })
        }
    }

// lorsque je click sur le bouton check //
// la correction des réponses qui sont fausse apparaisse en display block //

let correctif = document.querySelectorAll("p.correctif")
let check = document.querySelector(".check")

console.log(correctif)

// Autre facons d'attribuer une couleur sur les li::before //
/*
let lis = document.querySelectorAll("li")
for(let i = 0; i < lis.length; i++)
{
    let li = lis[i]
    let active = function(event)
    {
        this.classList.toggle("active")
    }
    li.addEventListener("click", active);
}
*/

/*
Object.prototype.remove = function()
{
    this.parentNode.removeChild(this);
};

var lis = document.querySelectorAll('li');

for (var i = 0, len = lis.length; i < len; i++) 
{
    lis[i].addEventListener('click', remove, false);
}
*/