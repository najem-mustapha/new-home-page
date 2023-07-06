const navBar=document.querySelector(".nav-bar");
const navItem=document.querySelectorAll(".nav-item");
const hamburger=document.querySelector(".hamburger");
const closeIcone=document.querySelector(".bx-x");
const menuIcone=document.querySelector(".bx-menu");

function toggleMenu(){
    if(navBar.classList.contains("showMenu")){
        navBar.classList.remove("showMenu");
        closeIcone.style.display=("none");
        menuIcone.style.display=("block");
    }else{
        navBar.classList.add("showMenu");
        closeIcone.style.display=("block");
        menuIcone.style.display=("none");
    }
}
hamburger.addEventListener("click",toggleMenu);
navItem.forEach(
    function (menuItem) {
        menuItem.addEventListener("click",toggleMenu);
      }
)