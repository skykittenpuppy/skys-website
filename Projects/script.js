const projectSection = document.getElementById("Projects").getElementsByClassName("content")[0];

const Tags = Object.freeze({
	MODRINTH: "Modrinth",
	GITHUB: "Github",
	CURSEFORGE: "Curseforge",
	HYTALE: "Hytale",
	MINECRAFT: "Minecraft",
	DATAPACK: "Data-Pack",
	RESOURCEPACK: "Resource-Pack",
	FABRICMOD: "Fabric-Mod",
})

const hytaleSortBonus = 2000000
const modrinthSortBonus = 1000000

const prefetchedOpenGraphImageUrl = {
	"Hytale-Minecraftians": JSON.stringify({"data": {"repository": {"openGraphImageUrl": "\
		CDN/ProjectIcons/MinecraftiansLogo.png\
	"}}}),

	"Datapack-Construct": JSON.stringify({"data": {"repository": {"openGraphImageUrl": "\
		https://repository-images.githubusercontent.com/909895930/2550c775-637c-4eb1-9717-d17b256082a9\
	"}}}),
	"Datapack-Delight": JSON.stringify({"data": {"repository": {"openGraphImageUrl": "\
		https://repository-images.githubusercontent.com/1025386411/ea04866d-7476-49a0-8aa7-303e97437211\
	"}}}),
	"Datapack-Decor": JSON.stringify({"data": {"repository": {"openGraphImageUrl": "\
		https://repository-images.githubusercontent.com/1051348656/a160c6a9-6c9b-4b7b-b77c-6cd20a5192e1\
	"}}}),
	"Datapack-Origins": JSON.stringify({"data": {"repository": {"openGraphImageUrl": "\
		https://repository-images.githubusercontent.com/1022566910/b9d43854-b502-48ad-b306-205a02ab841b\
	"}}}),
	"Datapack-Restauranteering": JSON.stringify({"data": {"repository": {"openGraphImageUrl": "\
		https://repository-images.githubusercontent.com/786897199/3a45b31d-1aed-4094-b0f0-6ac255974a5b\
	"}}}),
	"Datapack-Royale": JSON.stringify({"data": {"repository": {"openGraphImageUrl": "\
		https://repository-images.githubusercontent.com/1037371813/a67545e1-ab6c-4c3b-9dab-9f24b1150ca8\
	"}}}),

	"Skys-Assorted-Sweets": JSON.stringify({"data": {"repository": {"openGraphImageUrl": "\
		https://repository-images.githubusercontent.com/821988591/d2a22092-1634-48b2-9394-a6c65af0a340\
	"}}}),
	"Skys-Sky-Islands": JSON.stringify({"data": {"repository": {"openGraphImageUrl": "\
		https://repository-images.githubusercontent.com/1042548473/5e1568d2-633e-46ac-b9fd-2374431567d5\
	"}}}),
}

var projectList = []

function projectElement(Link, Name, Icon, Description = "", Stats = "", Colour = "#FFFFFF", ProjTags = []){
	let background = document.createElement("div");
	background.style = "--project-colour: "+Colour+";";
	background.classList = "projectBackground";

	let inner = document.createElement("div");
	inner.classList = "projectInner";
	background.appendChild(inner);

	let icon = document.createElement("img");
	icon.src = Icon;
	icon.classList = "projectIcon";
	inner.appendChild(icon);

	let name = document.createElement("a");
	name.innerText = Name;
	name.href = Link;
	name.classList = "projectName";
	inner.appendChild(name);

	let favicons = document.createElement("div");
	favicons.classList = "projectFavicons";
	if (ProjTags.includes(Tags.MODRINTH)){
		var favicon = document.createElement("img");
		favicon.src = "CDN/ProjectIcons/modrinth.png";
		favicon.classList = "projectFavicon";
		favicons.appendChild(favicon)
	}
	if (ProjTags.includes(Tags.GITHUB)){
		var favicon = document.createElement("img");
		favicon.src = "CDN/ProjectIcons/github.png";
		favicon.classList = "projectFavicon";
		favicons.appendChild(favicon)
	}
	if (ProjTags.includes(Tags.CURSEFORGE)){
		var favicon = document.createElement("img");
		favicon.src = "CDN/ProjectIcons/curseforge.png";
		favicon.classList = "projectFavicon";
		favicons.appendChild(favicon)
	}
	if (ProjTags.includes(Tags.HYTALE)){
		var favicon = document.createElement("img");
		favicon.src = "CDN/ProjectIcons/hytale.png";
		favicon.classList = "projectFavicon";
		favicons.appendChild(favicon)
	}
	if (ProjTags.includes(Tags.DATAPACK)){
		var favicon = document.createElement("img");
		favicon.src = "CDN/ProjectIcons/dataPack.png";
		favicon.classList = "projectFavicon";
		favicons.appendChild(favicon)
	}
	if (ProjTags.includes(Tags.RESOURCEPACK)){
		var favicon = document.createElement("img");
		favicon.src = "CDN/ProjectIcons/resourcePack.png";
		favicon.classList = "projectFavicon";
		favicons.appendChild(favicon)
	}
	if (ProjTags.includes(Tags.FABRICMOD)){
		var favicon = document.createElement("img");
		favicon.src = "CDN/ProjectIcons/fabricMC.png";
		favicon.classList = "projectFavicon";
		favicons.appendChild(favicon)
	}
	if (favicons.childElementCount != 0) inner.appendChild(favicons);

	let desc = document.createElement("p");
	desc.innerText = Description;
	desc.classList = "projectDesc";
	inner.appendChild(desc);

	if (Stats != ""){
		let stats = document.createElement("p");
		stats.innerText = Stats;
		stats.classList = "projectStats";
		inner.appendChild(stats);
	}

	return background;
}

async function fetchModrinth() {
	const url = "https://api.modrinth.com/v2/user/skykittenpuppy/projects";
	await fetch(url)
	.then(async function(response) {
	  	await response.json()
		.then(async function(projects){
			await projects
			.forEach(async function(project){
				let tags = [];
				if (project.loaders.includes("datapack"))
					tags = [Tags.MODRINTH, Tags.MINECRAFT, Tags.DATAPACK];
				else if (project.loaders.includes("minecraft"))
					tags = [Tags.MODRINTH, Tags.MINECRAFT, Tags.RESOURCEPACK];
				else if (project.loaders.includes("fabric"))
					tags = [Tags.MODRINTH, Tags.MINECRAFT, Tags.FABRICMOD];

				projectList.push({
					element: projectElement(
						"https://modrinth.com/"+project.project_type+"/"+project.slug,
						project.title,
						project.icon_url,
						project.description,
						"📥 " + project.downloads + " ❤️ " + project.followers,
						"#"+project.color.toString(16),
						tags
					),
					tags: tags,
					sortValue: project.followers + modrinthSortBonus,
				});
			});
	  	});
	}).catch(err => console.error(err));
}

async function fetchGithub(){
	const url = 'https://api.github.com/users/skykittenpuppy/repos';
	await fetch(url)
	.then(async function(response) {
	  	await response.json()
		.then(async function(repos){
			await repos
			.filter((a) => a.topics.includes("site-project"))
			.forEach(async function(repo){
				let tags = [];
				if (repo.topics.includes("hytale"))
					tags = [Tags.GITHUB, Tags.HYTALE]
				if (repo.topics.includes("minecraft-datapack"))
					tags = [Tags.GITHUB, Tags.MINECRAFT, Tags.DATAPACK];
				else if (repo.topics.includes("minecraft-resourcepack"))
					tags = [Tags.GITHUB, Tags.MINECRAFT, Tags.RESOURCEPACK];
				else if (repo.topics.includes("fabric-mod"))
					tags = [Tags.GITHUB, Tags.MINECRAFT, Tags.FABRICMOD];

				projectList.push({
					element: projectElement(
						repo.html_url,
						repo.name,
						"CDN/ProjectIcons/Github/"+repo.name+".png",
						repo.description,
						"👀 " + repo.watchers_count + " ⭐ " + repo.stargazers_count,
						"#1b1f24",
						tags
					),
					tags: tags,
					sortValue: repo.stargazers_count + (tags.includes(Tags.HYTALE) && hytaleSortBonus),
				});
			});
	  	});
	}).catch(err => console.error(err));
}

function loadProjects(filter){
	let tempProjList = projectList
		.filter((a) => !filter || a.tags.includes(filter));

	projectSection.replaceChildren();
	for (let project of tempProjList)
		projectSection.appendChild(project.element);
}

(async () => {
	await fetchModrinth();
	await fetchGithub();
	projectList.push({
		element: projectElement(
			"https://www.curseforge.com/hytale/mods/armed-with-ammo",
			"Armed With Ammo",
			"https://media.forgecdn.net/avatars/thumbnails/1630/269/256/256/639045278596288956.png",
			"Adds ammo and makes guns functional!",
			"",
			"#f16436",
			[Tags.CURSEFORGE, Tags.HYTALE]
		),
		tags: [Tags.CURSEFORGE, Tags.HYTALE],
		sortValue: hytaleSortBonus,
	});

	projectList.sort((a, b) => b.sortValue - a.sortValue);
	loadProjects();
})();