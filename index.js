const header = document.querySelector("header");
const menuBtn = document.querySelector("#menu-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", ()=>{
    header.classList.toggle("show-moblie-menu");
});

closeMenuBtn.addEventListener("click", ()=>{
    menuBtn.click();
});