const artSection = document.getElementById("Art").getElementsByClassName("content")[0];
let leftButton = document.createElement("div");
leftButton.innerText = "<";
leftButton.className = "moveButtons";
leftButton.addEventListener("click", (event) => {
	selected = (selected - 1 + artList.length) % artList.length;
	swapTo(selected);
});
artSection.appendChild(leftButton);
let contentHolder = document.createElement("span");
contentHolder.className = "contentHolder";
artSection.appendChild(contentHolder);
let rightButton = document.createElement("div");
rightButton.innerText = ">";
rightButton.className = "moveButtons";
rightButton.addEventListener("click", (event) => {
	selected = (selected + 1 + artList.length) % artList.length;
	swapTo(selected);
});
artSection.appendChild(rightButton);
let nameHolder = document.createElement("span");
nameHolder.className = "nameHolder";
artSection.appendChild(nameHolder);

var artList = [
	{
		file: "Tricky Trials.png",
		name: "Tricky Trials",
		group: "",
	},
	{
		file: "Jungle Explorers.png",
		name: "Jungle Explorers",
		group: "",
	},
	{
		file: "Desert Archeology.png",
		name: "Desert Archeology",
		group: "",
	},
	{
		file: "Snowy Campsite.png",
		name: "Snowy Campsite",
		group: "",
	},
	{
		file: "Lush Cave.png",
		name: "The Lush Cave",
		group: "",
	},
	{
		file: "The Nether.png",
		name: "The Nether",
		group: "",
	},
	{
		file: "Minecraft PS1 - Menu.mp4",
		name: "Menu",
		group: "Minecraft PS1",
	},
	{
		file: "Minecraft PS1 - Chest.mp4",
		name: "Chest",
		group: "Minecraft PS1",
	},
	{
		file: "How Do I Craft This Again.png",
		name: "How Do I Craft This Again?",
		group: "Parody",
	},
	{
		file: "Screw The Nether.png",
		name: "Screw The Nether!",
		group: "Parody",
	},
	{
		file: "Moonquest.png",
		name: "Moonquest",
		group: "Parody",
	},
]

let selected = 0;

function swapTo(index) {
	console.log(index);
	let info = artList[index];
	console.log(info);
	if (info.file.endsWith(".mp4")){
		contentHolder.innerHTML = `<video muted autoplay loop> <source src="CDN/Art/`+info.file+`" tye="video/mp4"> Your browser does not support the video tag. </video>`;
	} else {
		contentHolder.innerHTML = `<img src="CDN/Art/`+info.file+`"/>`;
	}
	nameHolder.innerText = info.group+"\n"+info.name;
}

swapTo(selected);