let mainSection = document.createElement("span");
document.querySelector("#Projects").appendChild(mainSection);

var projList = [
	{	
		func: addModrinth
	},
	{
		func: addGithub,
		name: "Datapacker's Construct",
		description: "A Minecraft Data-Pack version of the Tinker's Construct Mod!",
		link: "https://github.com/skykittenpuppy/Datapackers-Construct",
		favicon: "CDN/Projects/github.png",
	},
	{
		func: addGithub,
		name: "PlateUp! MC",
		description: "A Minecraft Data-Pack that aims to recreate the game PlateUp!",
		link: "https://github.com/skykittenpuppy/PlateUp-MC",
		favicon: "CDN/Projects/github.png",
	},
	{
		func: addGithub,
		name: "Sky's Assorted Sweets",
		description: "A Minecraft Mod featuring Small to Medium tweaks",
		link: "https://github.com/skykittenpuppy/Skys-Assorted-Sweets",
		favicon: "CDN/Projects/github.png",
	},
	{
		func: addGithub,
		name: "Community Life Series",
		description: "A Minecraft Data-Pack that aims to recreate the mechanics of the youtube Life Series SMP",
		link: "https://github.com/skykittenpuppy/Community-Life-Series-Datapack",
		favicon: "CDN/Projects/github.png",
	},
];

async function addModrinth(info) {
	const url = "https://api.modrinth.com/v2/user/skykittenpuppy/projects";
	await fetch(url)
	.then(async function(response) {
	  	await response.json()
		.then(async function(projects){
			await projects.sort((a, b) => b.downloads - a.downloads)
			.forEach(function(project){
				let container = document.createElement("div");
				//container.style = "background-color: #"+project.color.toString(16)+";";
				container.classList = "project";

				let icon = document.createElement("img");
				icon.src = project.icon_url;
				icon.classList = "projectIcon";
				container.appendChild(icon);

				let link = document.createElement("a");
				link.innerText = project.title;
				link.href = "https://modrinth.com/"+project.project_type+"/"+project.slug;
				link.classList = "projectName";
				container.appendChild(link);
			
				let favicon = document.createElement("img");
				favicon.src = "CDN/Projects/modrinth.png";
				favicon.classList = "projectFavicon";
				container.appendChild(favicon);
			
				let desc = document.createElement("p");
				desc.innerText = project.description;
				desc.classList = "projectDesc";
				container.appendChild(desc);

				let stats = document.createElement("p");
				stats.innerText = "📥 " + project.downloads + " ♥ " + project.followers;
				stats.classList = "projectStats";
				container.appendChild(stats);
			
				mainSection.appendChild(container);
			});
	  	});
	}).catch(err => console.error(err));
}

async function addGithub(info){
	addLink(info)
}

function addLink(info){
	let container = document.createElement("div")
	container.classList = "project";

	let icon = document.createElement("img");
	icon.src = "../CDN/Projects/"+info.name+".png";
	icon.classList = "projectIcon"
	container.appendChild(icon);

	let link = document.createElement("a");
	link.innerText = info.name;
	link.href = info.link;
	link.classList = "projectName";
	container.appendChild(link);

	let favicon = document.createElement("img");
	favicon.src = info.favicon;
	favicon.classList = "projectFavicon";
	container.appendChild(favicon);

	let desc = document.createElement("p");
	desc.innerText = info.description;
	desc.classList = "projectDesc"
	container.appendChild(desc);

	mainSection.appendChild(container);
}

async function setUp(){
	for (let proj in projList) {
		await projList[proj].func(projList[proj]);
	}
}
setUp()