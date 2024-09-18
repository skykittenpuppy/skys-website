document.querySelector("#HomeButton")
		.addEventListener("click", (event) => {
	document.body.className = "Home";
})
document.querySelector("#OCsButton")
		.addEventListener("click", (event) => {
	document.body.className = "OCs";
})
document.querySelector("#ArtButton")
		.addEventListener("click", (event) => {
	document.body.className = "Art";
})
document.querySelector("#ProjectsButton")
		.addEventListener("click", (event) => {
	document.body.className = "Projects";
})

function minimiseOrClose(){
	document.body.className = "";
}