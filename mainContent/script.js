document.querySelector("#HomeButton").addEventListener("click", (event) => {
	window.location.hash = "Home"
})
document.querySelector("#OCsButton").addEventListener("click", (event) => {
	window.location.hash = "OCs"
})
document.querySelector("#ArtButton").addEventListener("click", (event) => {
	window.location.hash = "Art"
})
document.querySelector("#ProjectsButton").addEventListener("click", (event) => {
	window.location.hash = "Projects"
})

function closeWindow(){
	window.history.pushState("", document.title, window.location.pathname);
}