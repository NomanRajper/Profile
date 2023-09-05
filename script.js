const burger = document.querySelector(".menuicon");
const details= document.querySelector(".panel");
const nevigate= document.querySelector(".navigate");


burger.addEventListener("click", () => {
	panel.classList.toggle("slide-right");
	navigate.classList.toggle("slide-left");
});