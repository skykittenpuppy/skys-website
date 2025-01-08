var projList = [
	{	func: addZip,
		name: "MC Earth Pigs",
		desc: "A Minecraft Data-Pack for 1.21.5 that adds 6 pig variants from Minecraft Earth",
		updt: new Date("2025-01-08"),
	},
	{	func: addZip,
		name: "Sky's Better Carpets",
		desc: "A Minecraft Resource-Pack that makes carpets overhang onto the block below",
		updt: new Date("2024-12-09"),
	},
	{	func: addZip,
		name: "Sky's Better Discs",
		desc: "A Minecraft Resource-Pack that retextures music discs to have an even-center",
		updt: new Date("2024-09-18"),
	},
	{	func: addZip,
		name: "Sky's Title Screen",
		desc: "A Minecraft Resource-Pack that replaces the logo and background on the title screen",
		updt: new Date("2024-12-11"),
	},
	{	func: addZip,
		name: "Sky's Farmland Sides",
		desc: "A Minecraft Resource-Pack that gives farmland blocks unique side textures",
		updt: new Date("2024-09-18"),
	},
	{	func: addZip,
		name: "Sky's Relit Flames",
		desc: "A Minecraft Resource-Pack that revamps the looks of different flaming blocks, like torches",
		updt: new Date("2024-09-27"),
	},
	{	func: addZip,
		name: "Sky's Softer Cakes",
		desc: "A Minecraft Resource-Pack that modifies the cake textures to make them look softer",
		updt: new Date("2024-09-18"),
	},
	{
		func: addLink,
		name: "Datapacker's Construct [WIP]",
		desc: "A Minecraft Data-Pack version of the Tinker's Construct Mod!",
		link: "https://github.com/skykittenpuppy/Datapackers-Construct",
	},
	{
		func: addLink,
		name: "PlateUp! MC [WIP]",
		desc: "A Minecraft Data-Pack that aims to recreate the game PlateUp!",
		link: "https://github.com/skykittenpuppy/PlateUp-MC",
	},
	{
		func: addLink,
		name: "Sky's Assorted Sweets [WIP]",
		desc: "A Minecraft Mod featuring Small to Medium tweaks",
		link: "https://github.com/skykittenpuppy/Skys-Assorted-Sweets",
	},
	{
		func: addLink,
		name: "Community Life Series [Abandoned]",
		desc: "A Minecraft Data-Pack that aims to recreate the mechanics of the youtube Life Series SMP",
		link: "https://github.com/skykittenpuppy/Community-Life-Series-Datapack",
	},
];

let mainSection = document.createElement("span");
document.querySelector("#Projects").appendChild(mainSection);

for (let proj in projList) {
	let container = document.createElement("div")
	projList[proj].func(container, projList[proj])
	container.classList = "project"
	mainSection.appendChild(container);
}

function addZip(container, info){
	let icon = document.createElement("img");
	icon.src = "../CDN/Projects/"+info.name+".png";
	icon.classList = "projectIcon"
	container.appendChild(icon);

	let link = document.createElement("a");
	link.innerText = info.name;
	link.href = "../CDN/Projects/"+info.name+".zip";
	link.classList = "projectName directDownload"
	container.appendChild(link);

	let desc = document.createElement("p");
	desc.innerText = info.desc;
	desc.classList = "projectDesc"
	container.appendChild(desc)

	let other = document.createElement("p");
	other.innerText = "Last updated: "+info.updt.toDateString();
	other.classList = "projectOther"
	container.appendChild(other)
}

function addLink(container, info){
	let icon = document.createElement("img");
	icon.src = "../CDN/Projects/"+info.name+".png";
	icon.classList = "projectIcon"
	container.appendChild(icon);

	let link = document.createElement("a");
	link.innerText = info.name
	link.href = info.link;
	link.classList = "projectName externalLink"
	container.appendChild(link);

	let desc = document.createElement("p");
	desc.innerText = info.desc;
	desc.classList = "projectDesc"
	container.appendChild(desc)
}