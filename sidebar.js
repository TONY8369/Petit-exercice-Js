// Faire apparaitre la Side bar en cliquant sur le burger //
const togglebutton = document.getElementById("toggle-button");
const sideBar = document.getElementById("side-bar");

togglebutton.addEventListener('click', function show()
{
    sideBar.classList.toggle("active");
})

/* Si on click sur la page sa enlève la side bar */
const content = document.querySelector(".content");

content.addEventListener("click",function()
{
    sideBar.classList.remove("active");
})