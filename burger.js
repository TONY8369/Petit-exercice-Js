
/* 
Creation du menu burger
Quand la class menu_ouvert est présente sur la div.container
alors la nav s'affiche 
et lorsqu'on enlève cette class (menu_ouvert)
la nav disparait
*/

/*
quand on clique sur le menu 
la class menu_ouvert est ajoutée sur la div.container
alors la nav s'affiche
et lorsqu on click sur fermer
la class menu_ouvert et supprimée de div.container
et la nav disparait ( display none)
*/

// Ajouter la class menu_ouvert sur la div container //

/*container.classList
container.classList.add(".menu_ouvert");*/
let container = document.querySelector(".container")
// lorsqu'on clique sur le menu la classe menu_ouvert et ajouter sur la div.container//
let ouvert = document.querySelector(".boutton")
ouvert.addEventListener("click",function(event)
{
    container.classList.add("menu_ouvert");
})
// Lorsqu'on clique sur fermer la classe menu_ouvert est supprimer //
let fermer = document.querySelector(".fermer")
fermer.addEventListener("click",function(event)
{
    container.classList.remove("menu_ouvert");
})
