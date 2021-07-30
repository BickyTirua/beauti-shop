const menuOpen = document.querySelector(".menu-open");
const menu = document.querySelector(".menu");

menuOpen.addEventListener("click",()=>{
    menu.classList.toggle("active");
})

function Close() {
    menu.classList.remove("active");
}


const nav = document.querySelector(".nav");

window.addEventListener("scroll",()=>{
    nav.classList.toggle("scrolled", scrollY > 0);
})