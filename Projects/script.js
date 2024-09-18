var projList = [
	{
		func: addLink,
		name: "Sky's Assorted Sweets",
		desc: "A Minecraft Mod featuring Small to Medium tweaks",
		link: "https://github.com/skykittenpuppy/Skys-Assorted-Sweets",
	},
	{	func: addPack,
		name: "Sky's Better Carpets",
		desc: "A Minecraft Resource-Pack that makes carpets overhang onto the block below",
		updt: new Date("2024-09-18"),
	},
	{	func: addPack,
		name: "Sky's Better Discs",
		desc: "A Minecraft Resource-Pack that retextures music discs to have an even-center",
		updt: new Date("2024-09-18"),
	},
	{	func: addPack,
		name: "Sky's Custom Logo",
		desc: "A Minecraft Resource-Pack that replaces the logo on the main menu",
		updt: new Date("2024-09-18"),
	},
	{	func: addPack,
		name: "Sky's Farmland Sides",
		desc: "A Minecraft Resource-Pack that gives farmland blocks unique side textures",
		updt: new Date("2024-09-18"),
	},
	{	func: addPack,
		name: "Sky's Softer Cakes",
		desc: "A Minecraft Resource-Pack that modifies the cake textures to make them look softer",
		updt: new Date("2024-09-18"),
	},
	{
		func: addLink,
		name: "PlateUp! MC",
		desc: "A Minecraft Data-Pack that aims to recreate the game PlateUp!",
		link: "https://github.com/skykittenpuppy/PlateUp-MC",
	},
	{
		func: addLink,
		name: "Community Life Series",
		desc: "A Minecraft Data-Pack that aims to recreate the mechanics of the youtube Life Series SMP",
		link: "https://github.com/skykittenpuppy/Community-Life-Series-Datapack",
	},
];

let mainSection = document.createElement("span");
document.querySelector("#ProjectsContent").appendChild(mainSection);

for (let proj in projList) {
	let container = document.createElement("div")
	projList[proj].func(container, projList[proj])
	container.classList = "project"
	mainSection.appendChild(container);
}

function addPack(container, packInfo){
	let icon = document.createElement("img");
	icon.src = "../CDN/Projects/"+packInfo.name+".png";
	icon.classList = "projectIcon"
	container.appendChild(icon);

	let link = document.createElement("a");
	link.innerText = packInfo.name;
	link.href = "../CDN/Projects/"+packInfo.name+".zip";
	link.classList = "projectName directDownload"
	container.appendChild(link);

	let desc = document.createElement("p");
	desc.innerText = packInfo.desc;
	desc.classList = "projectDesc"
	container.appendChild(desc)

	let other = document.createElement("p");
	other.innerText = "Last updated: "+packInfo.updt.toDateString();
	other.classList = "projectOther"
	container.appendChild(other)
}

function addLink(container, linkInfo){
	let icon = document.createElement("img");
	icon.src = "../CDN/Projects/"+linkInfo.name+".png";
	icon.classList = "projectIcon"
	container.appendChild(icon);

	let link = document.createElement("a");
	link.innerText = linkInfo.name
	link.href = linkInfo.link;
	link.classList = "projectName externalLink"
	container.appendChild(link);

	let desc = document.createElement("p");
	desc.innerText = linkInfo.desc;
	desc.classList = "projectDesc"
	container.appendChild(desc)
}