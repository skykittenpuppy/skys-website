var projList = [
	{	func: addLink,
		name: "MC Earth Pigs",
		description: "A Minecraft Data-Pack & Resource-Pack for 1.21.5 that adds 6 pig variants from Minecraft Earth",
		link: "https://modrinth.com/datapack/mc-earth-pigs",
		favicon: "CDN/Projects/modrinth.png",
	},
	{	func: addLink,
		name: "Cheaper Duplication",
		description: "A Minecraft Data-Pack that adds/rebalances recipes for duplicating rare items.",
		link: "https://modrinth.com/datapack/cheaper-duplication",
		favicon: "CDN/Projects/modrinth.png",
	},
	{	func: addLink,
		name: "Sky's Distinguished Variants",
		description: "A Minecraft Resource-Pack that gives axolotl buckets, painting variants and (invisible item frames [WIP]) unique sprites.",
		link: "https://modrinth.com/resourcepack/skys-distinguished-variants",
		favicon: "CDN/Projects/modrinth.png",
	},
	{	func: addLink,
		name: "Sky's Better Carpets",
		description: "A Minecraft Resource-Pack that makes carpets overhang onto the block below",
		link: "https://modrinth.com/resourcepack/skys-better-carpets",
		favicon: "CDN/Projects/modrinth.png",
	},
	{	func: addLink,
		name: "Sky's Better Discs",
		description: "A Minecraft Resource-Pack that retextures music discs to have an even-center",
		link: "https://modrinth.com/resourcepack/skys-better-discs",
		favicon: "CDN/Projects/modrinth.png",
	},
	{	func: addLink,
		name: "Sky's Farmland Sides",
		description: "A Minecraft Resource-Pack that gives farmland blocks unique side textures",
		link: "https://modrinth.com/resourcepack/skys-farmland-sides",
		favicon: "CDN/Projects/modrinth.png",
	},
	{	func: addLink,
		name: "Sky's Relit Flames",
		description: "A Minecraft Resource-Pack that revamps the looks of different flaming blocks, like torches",
		link: "https://modrinth.com/resourcepack/skys-relit-flames",
		favicon: "CDN/Projects/modrinth.png",
	},
	{	func: addLink,
		name: "Sky's Softer Cakes",
		description: "A Minecraft Resource-Pack that modifies the cake textures to make them look softer",
		link: "https://modrinth.com/resourcepack/skys-softer-cakes",
		favicon: "CDN/Projects/modrinth.png",
	},
	{	func: addLink,
		name: "Sky's Title Screen",
		description: "A Minecraft Resource-Pack that replaces the logo and background on the title screen",
		link: "https://modrinth.com/resourcepack/skys-title-screen",
		favicon: "CDN/Projects/modrinth.png",
	},
	{	func: addLink,
		name: "Sky's Unique Woods",
		description: "A Minecraft Resource-Pack that replaces Dark Oak with Walnut and Pale Oak with Silver Maple, as well as darkening dark oak leaves' texture",
		link: "https://modrinth.com/resourcepack/skys-unique-woods",
		favicon: "CDN/Projects/modrinth.png",
	},
	{
		func: addLink,
		name: "Datapacker's Construct",
		description: "A Minecraft Data-Pack version of the Tinker's Construct Mod!",
		link: "https://github.com/skykittenpuppy/Datapackers-Construct",
		favicon: "CDN/Projects/github.png",
	},
	{
		func: addLink,
		name: "PlateUp! MC",
		description: "A Minecraft Data-Pack that aims to recreate the game PlateUp!",
		link: "https://github.com/skykittenpuppy/PlateUp-MC",
		favicon: "CDN/Projects/github.png",
	},
	{
		func: addLink,
		name: "Sky's Assorted Sweets",
		description: "A Minecraft Mod featuring Small to Medium tweaks",
		link: "https://github.com/skykittenpuppy/Skys-Assorted-Sweets",
		favicon: "CDN/Projects/github.png",
	},
	{
		func: addLink,
		name: "Community Life Series",
		description: "A Minecraft Data-Pack that aims to recreate the mechanics of the youtube Life Series SMP",
		link: "https://github.com/skykittenpuppy/Community-Life-Series-Datapack",
		favicon: "CDN/Projects/github.png",
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

function addLink(container, info){
	let icon = document.createElement("img");
	icon.src = "../CDN/Projects/"+info.name+".png";
	icon.classList = "projectIcon"
	container.appendChild(icon);

	let link = document.createElement("a");
	link.classList = "projectName";
	link.href = info.link;

	let favicon = document.createElement("img");
	favicon.src = info.favicon;
	link.appendChild(favicon);

	let name = document.createElement("p");
	name.innerText = info.name
	link.appendChild(name);

	container.appendChild(link);

	let desc = document.createElement("p");
	desc.innerText = info.description;
	desc.classList = "projectDesc"
	container.appendChild(desc)
}