const carouselMain = document.querySelector("#carouselMain");
const carouselOther = document.querySelector("#carouselOther");
const artPicker = document.querySelector("#artPicker");
var fileList = [
	"Tricky Trials",
	"Jungle Explorers",
	"Desert Archeology",
	"Snowy Campsite",
	"How Do I Craft This Again",
	"Screw The Nether",
	"Moonquest",
	"Beach Camp",
	"Lush Cave",
	"The Nether",
	"Minecraft PS1 - Menu",
	"Minecraft PS1 - Chest",
];
var selectedFile = 0;
var previousFile = 0;

function swapToFile(index) {
	previousFile = selectedFile
	selectedFile = index
	carouselMain.src = "../CDN/Art/"+fileList[selectedFile]+".png";
	carouselOther.src = "../CDN/Art/"+fileList[previousFile]+".png";
}

for (let file in fileList) {
	let container = document.createElement("button")
	container.onclick = () => {swapToFile(file);}
	let image = document.createElement("img");
	image.src = "../CDN/Art/"+fileList[file]+".png";
	container.appendChild(image);
	artPicker.appendChild(container);
}
swapToFile(3);
