const mainContent = document.querySelector('#mainContent')
const HomeButton  = document.querySelector("#HomeButton");
const OCsButton  = document.querySelector("#OCsButton");
const ArtButton  = document.querySelector("#ArtButton");

HomeButton.addEventListener("click", (event) => {
	document.body.className = "Home";
})
OCsButton.addEventListener("click", (event) => {
	document.body.className = "OCs";
})
ArtButton.addEventListener("click", (event) => {
	document.body.className = "Art";
})

function minimiseOrClose(){
	document.body.className = "";
}