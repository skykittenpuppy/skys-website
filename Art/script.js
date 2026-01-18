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

const Group = Object.freeze({
	Main: "",
	PS1: "Minecraft PS1",
	Parody: "Parody",
});

const artList = [
	{
		file: "Tricky Trials.png",
		name: "Tricky Trials",
		group: Group.Main,
		date: new Date("12 June 2024"),
	},
	{
		file: "Jungle Explorers.png",
		name: "Jungle Explorers",
		group: Group.Main,
		date: new Date("29 May 2024"),
	},
	{
		file: "Desert Archeology.png",
		name: "Desert Archeology",
		group: Group.Main,
		date: new Date("23 May 2024"),
	},
	{
		file: "Snowy Campsite.png",
		name: "Snowy Campsite",
		group: Group.Main,
		date: new Date("22 May 2024"),
	},
	{
		file: "Lush Cave.png",
		name: "The Lush Cave",
		group: Group.Main,
		date: new Date("10 August 2022"),
	},
	{
		file: "The Nether.png",
		name: "The Nether",
		group: Group.Main,
		date: new Date("10 August 2022"),
	},
	{
		file: "Minecraft PS1 - House.mp4",
		name: "House (Remastered)",
		group: Group.PS1,
		date: new Date("04 May 2025"),
	},
	{
		file: "Minecraft PS1 - Chest.mp4",
		name: "Chest (Remastered)",
		group: Group.PS1,
		date: new Date("05 May 2025"),
	},
	{
		file: "Minecraft PS1 - Pale Garden.mp4",
		name: "Pale Garden",
		group: Group.PS1,
		date: new Date("03 May 2025"),
	},
	{
		file: "How Do I Craft This Again.png",
		name: "How Do I Craft This Again?",
		group: Group.Parody,
		date: new Date("22 July 2023"),
	},
	{
		file: "Screw The Nether.png",
		name: "Screw The Nether!",
		group: Group.Parody,
		date: new Date("11 March 2023"),
	},
	{
		file: "Moonquest.png",
		name: "Moonquest",
		group: Group.Parody,
		date: new Date("20 March 2024"),
	},
]

let selected = 0;

function swapTo(index) {
	let info = artList[index];
	if (info.file.endsWith(".mp4")){
		contentHolder.innerHTML = `<video muted autoplay loop> <source src="CDN/Art/`+info.file+`" tye="video/mp4"> Your browser does not support the video tag. </video>`;
	} else {
		contentHolder.innerHTML = `<img src="CDN/Art/`+info.file+`"/>`;
	}
	nameHolder.innerText = 
		(info.group != "" ? info.group+"\n" : "")
		+info.name;
		//+"\n"+info.date?.toDateString();
}

swapTo(selected);