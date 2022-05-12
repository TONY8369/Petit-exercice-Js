// code javascipt de la commande pizza //
document.addEventListener("DOMContentLoaded", function () 
{
    // Création d'un tableau ou seront stocker mes pizzas ainsi que leur nombre et leur prix et la quantité
    const objectPizza =
    {
        reine:0,
        reine_blanche:0,
        napolitaine:0,
        estoril:0,
        aubergine:0,
        royale:0,
        speciale:0
    };
    //objectPizza[choixPizza];
    //console.log(objectPizza[choixPizza])
// je crée une fonction pour activé mon bouton plus et additionner des pizzas
    const ajouterPizza = document.querySelectorAll(".plus");
    ajouterPizza.forEach(ajouter =>
    {
        ajouter.addEventListener("click",ajout);
    })
    // fonction pour ajouter une pizza et calculer la somme de la ligne 
    function ajout()
    {
        // je cherche la pizza sur laquelle on a cliqué
        pizza = this.dataset.ajout;
        // je récupère le nombre de pizza selectionnée sur cette ligne
        let nombre = parseInt(document.querySelector("."+pizza+" .nombre").dataset.nombre);
        // j'ajoute 1
        nombre = nombre+1;
        //console.log(nombre)
        // je mets à jour le nombre de pizza
        document.querySelector("."+pizza+" .nombre").dataset.nombre = nombre;
        document.querySelector("."+pizza+" .nombre strong").innerHTML = nombre;
        // je met à jour la somme des différentes pizza àjouté
        let prixpizza =  parseInt(document.querySelector("."+pizza+" .prix").dataset.prix);
        document.querySelector("."+pizza+" .somme").dataset.somme = prixpizza * nombre;
        document.querySelector("."+pizza+" .somme strong").innerHTML = prixpizza * nombre + "€";
        // je met à jour ma somme total
        // je sélectionne toute mes sommes
        let totalSomme = document.querySelectorAll(".somme")
        // j'attribue une valeur à ma somme de base
        let sommeTotal = 0;
        // j'affiche la valeur somme total et je lui attribue une valeur une fois le click éffectuer
        totalSomme.forEach(totalLigne => 
            {
            sommeTotal = sommeTotal + parseInt(totalLigne.dataset.somme);
            //console.log(sommeTotal)
            document.querySelector("#sommeTotal strong").innerHTML = ("Total:"+ sommeTotal +  "€");
            });
            // je récupère la liste des pizza qui ont était commander
            // je récupère la liste de toute les pizza
            let choixPizza = this.dataset.ajout
                choixPizza = choixPizza 
                console.log(choixPizza)
                let commande = document.querySelector(".liste_commande");
            //j'affiche la liste de pizza dans mon tableau
            objectPizza[choixPizza]+=1;
            //condition pour afficher mon bouton paypal et ma liste de commande de pizza
        if(sommeTotal > 0)
        {
            document.querySelector("#paypal-button-container").classList.add("active");
            document.querySelector(".liste_commande").classList.add("active");
            commande.innerHTML=("<p>Votre commande est :</p> ")
            //boucle pour ajouter et mettre a jour ma liste de commande
            for(let nom in objectPizza)
            {
                if(objectPizza[nom]>0)
                {
                    console.log(nom,":",objectPizza[nom])
                    //insertion du nombre et du nom de la pizza dans mon html
                    commande.insertAdjacentHTML("beforeend",objectPizza[nom]+ " "+nom+ " ")
                }
            }
            //insertion du total de ma commande sur mon html
            commande.insertAdjacentHTML("beforeend"," pour un total de :"+sommeTotal+ " € ")
        }
        //console.log(objectPizza[choixPizza])
    }
// je créé une fonction pour activé mon bouton moin et soustraire des pizzas
    const soustrairePizza = document.querySelectorAll(".moin");
    soustrairePizza.forEach(soustraires =>
    {
        soustraires.addEventListener("click",soustraire);
    })
    // fonction pour soustraire une pizza et donc la soustraire à la somme
    function soustraire()
    {
         // je cherche la pizza sur laquelle on a cliqué
        pizza = this.dataset.soustraire;
         // je récupère le nombre de pizza selectionnée sur cette ligne
        let nombre = parseInt(document.querySelector("."+pizza+" .nombre").dataset.nombre);
        console.log(nombre)
         // j'enlève 1 et j'enpèche le nombre d'ètre inférieur à 0
        if(nombre >0)
            {
                nombre = nombre-1;
            }
        else
            {
                nombre = 0;
            }
        console.log(nombre)
         // je mets à jour le nombre de pizza
        document.querySelector("."+pizza+" .nombre").dataset.nombre = nombre;
        document.querySelector("."+pizza+" .nombre strong").innerHTML = nombre;
         // je met à jour la somme des différentes pizza àjouté
        let prixpizza =  parseInt(document.querySelector("."+pizza+" .prix").dataset.prix);
         document.querySelector("."+pizza+" .somme").dataset.somme = prixpizza * nombre;
         document.querySelector("."+pizza+" .somme strong").innerHTML = prixpizza * nombre + "€";
        // je met à jour ma somme total
        // je sélectionne toute mes sommes
        let totalSomme = document.querySelectorAll(".somme")
        // j'attribue une valeur à ma somme de base
        let sommeTotal = 0;
        // j'affiche la valeur somme total et je lui attribue une valeur une fois le click éffectuer
        totalSomme.forEach(totalLigne => 
        {
            sommeTotal = sommeTotal + parseInt(totalLigne.dataset.somme);
            console.log(sommeTotal)
            document.querySelector("#sommeTotal strong").innerHTML =("Total : " +sommeTotal + "€");
        });
        // je récupère la liste des pizza qui ont était commander
            // je récupère la liste de toute les pizza
            let choixPizza = this.dataset.soustraire
            // j'affiche la commande de pizza
            choixPizza = choixPizza
            console.log(choixPizza)
            let commande = document.querySelector(".liste_commande");
            // ajout de mes pizza dans mon tableau ainsi que leur nombre
        if(objectPizza[choixPizza]>0)
        {
            objectPizza[choixPizza]-=1;
        }
        console.log(objectPizza[choixPizza])
        // supprimer la class active de mon bouton payer maintenant et liste de commande
        if(sommeTotal===0)
        {
            document.querySelector("#paypal-button-container").classList.remove("active");
            document.querySelector(".liste_commande").classList.remove("active");
        }
        // Executer l'affichage de ma commande qui est stocker dans mon tableau
        else
        {
            commande.innerHTML=("<p>Votre commande est :</p> ")
            for(let nom in objectPizza)
            {
                if(objectPizza[nom]>0)
                {
                    console.log(nom,":",objectPizza[nom])
                    // insertion de la commande dans mon html dans ma div liste_commande
                    commande.insertAdjacentHTML("beforeend",objectPizza[nom]+ " "+nom+ " ")
                }
            }
            //insertion du prix total de la commande dans ma div liste_commande
            commande.insertAdjacentHTML("beforeend"," pour un total de :"+sommeTotal+ " € ")
        }
    }
    // fonction paypal //
    function initPayPalButton() 
    {
        paypal.Buttons(
            {
                    style: 
                {
                    shape: 'rect',
                    color: 'gold',
                    layout: 'vertical',
                    label: 'paypal',
                },
                createOrder: function(data, actions) 
                {
                    return actions.order.create(
                        {
                            purchase_units: [{"amount":{"currency_code":"USD","value":1}}]
                        });
                },
                onApprove: function(data, actions) 
                {
                    return actions.order.capture().then(function(orderData) 
                    {
                        // Full available details
                        console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
                        // Show a success message within this page, e.g.
                        const element = document.getElementById('paypal-button-container');
                        element.innerHTML = '';
                        element.innerHTML = '<h3>Thank you for your payment!</h3>';
                        // Or go to another URL:  actions.redirect('thank_you.html');
                    });
                },
                onError: function(err) 
                {
                    console.log(err);
                }
            }).render('#paypal-button-container');
    }
    initPayPalButton();
});





























/* Exemple de méthode pour débuter un code en javascript
document.addEventListener("DOMContentLoaded", function () 
{

    let getMessage = () => console.log('Hello World');
    let getMessage2 = () => console.log('Hello World2');
    var form = document.getElementById("formulaire");
    form.addEventListener("submit",
    
    (event) => 
    {
        event.preventDefault();
        getMessage();
        getMessage2();
    })
});
*/