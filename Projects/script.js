var projList = [
	{	func: addZip,
		name: "MC Earth Pigs",
		description: "A Minecraft Data-Pack for 1.21.5 that adds 6 pig variants from Minecraft Earth",
		updated: new Date("2025-01-09"),
		version: "v1.2",
		tags: ["Datapack"],
	},
	{	func: addZip,
		name: "Cheaper Duplication",
		description: "A Minecraft Data-Pack that adds/rebalances recipes for duplicating rare items.",
		updated: new Date("2025-01-10"),
		version: "v1.0",
		tags: ["Datapack"],
	},
	{	func: addZip,
		name: "Sky's Better Carpets",
		description: "A Minecraft Resource-Pack that makes carpets overhang onto the block below",
		updated: new Date("2024-12-09"),
		version: "v1.1",
		tags: ["Resourcepack"],
	},
	{	func: addZip,
		name: "Sky's Better Discs",
		description: "A Minecraft Resource-Pack that retextures music discs to have an even-center",
		updated: new Date("2024-09-18"),
		version: "v1.0",
		tags: ["Resourcepack"],
	},
	{	func: addZip,
		name: "Sky's Title Screen",
		description: "A Minecraft Resource-Pack that replaces the logo and background on the title screen",
		updated: new Date("2024-12-11"),
		version: "v2.0",
		tags: ["Resourcepack"],
	},
	{	func: addZip,
		name: "Sky's Farmland Sides",
		description: "A Minecraft Resource-Pack that gives farmland blocks unique side textures",
		updated: new Date("2024-09-18"),
		version: "v1.0",
		tags: ["Resourcepack"],
	},
	{	func: addZip,
		name: "Sky's Relit Flames",
		description: "A Minecraft Resource-Pack that revamps the looks of different flaming blocks, like torches",
		updated: new Date("2024-09-27"),
		version: "v1.0",
		tags: ["Resourcepack"],
	},
	{	func: addZip,
		name: "Sky's Softer Cakes",
		description: "A Minecraft Resource-Pack that modifies the cake textures to make them look softer",
		updated: new Date("2024-09-18"),
		version: "v1.0",
		tags: ["Resourcepack"],
	},
	{
		func: addLink,
		name: "Datapacker's Construct",
		description: "A Minecraft Data-Pack version of the Tinker's Construct Mod!",
		link: "https://github.com/skykittenpuppy/Datapackers-Construct",
		tags: ["Datapack", "WIP"],
	},
	{
		func: addLink,
		name: "PlateUp! MC",
		description: "A Minecraft Data-Pack that aims to recreate the game PlateUp!",
		link: "https://github.com/skykittenpuppy/PlateUp-MC",
		tags: ["Datapack", "WIP"],
	},
	{
		func: addLink,
		name: "Sky's Assorted Sweets",
		description: "A Minecraft Mod featuring Small to Medium tweaks",
		link: "https://github.com/skykittenpuppy/Skys-Assorted-Sweets",
		tags: ["Mod", "WIP"],
	},
	{
		func: addLink,
		name: "Community Life Series",
		description: "A Minecraft Data-Pack that aims to recreate the mechanics of the youtube Life Series SMP",
		link: "https://github.com/skykittenpuppy/Community-Life-Series-Datapack",
		tags: ["Datapack", "Abandoned"],
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

	let tags = document.createElement("b");
	tags.innerText = info.tags[1] ?? "";
	tags.classList = "projectTags"
	container.appendChild(tags)

	let desc = document.createElement("p");
	desc.innerText = info.description;
	desc.classList = "projectDesc"
	container.appendChild(desc)

	let other = document.createElement("p");
	other.innerText = info.version+": "+info.updated.toDateString();
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

	let tags = document.createElement("b");
	tags.innerText = info.tags[1] ?? "";
	tags.classList = "projectTags"
	container.appendChild(tags)

	let desc = document.createElement("p");
	desc.innerText = info.description;
	desc.classList = "projectDesc"
	container.appendChild(desc)
}