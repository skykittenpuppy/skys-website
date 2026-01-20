const projectSection = document.getElementById("Projects").getElementsByClassName("content")[0];

var curseforgeFavicon = document.createElement("img");
curseforgeFavicon.src = "CDN/ProjectIcons/curseforge.png";
curseforgeFavicon.classList = "projectFavicon curseforge";

var githubFavicon = document.createElement("img");
githubFavicon.src = "CDN/ProjectIcons/github.png";
githubFavicon.classList = "projectFavicon github";

var modrinthFavicon = document.createElement("img");
modrinthFavicon.src = "CDN/ProjectIcons/modrinth.png";
modrinthFavicon.classList = "projectFavicon modrinth";

var resourcePackFavicon = document.createElement("img");
resourcePackFavicon.src = "CDN/ProjectIcons/resourcePack.png";
resourcePackFavicon.classList = "projectFavicon resourcePack";

var dataPackFavicon = document.createElement("img");
dataPackFavicon.src = "CDN/ProjectIcons/dataPack.png";
dataPackFavicon.classList = "projectFavicon dataPack";

var fabricMCFavicon = document.createElement("img");
fabricMCFavicon.src = "CDN/ProjectIcons/fabricMC.png";
fabricMCFavicon.classList = "projectFavicon fabricMC";

var hytaleFavicon = document.createElement("img");
hytaleFavicon.src = "CDN/ProjectIcons/hytale.png";
hytaleFavicon.classList = "projectFavicon hytale";

var prefetchedOpenGraphImageUrl = {
	"Hytale-Minecraftians": JSON.stringify({"data": {"repository": {"openGraphImageUrl": "\
		CDN/ProjectIcons/MinecraftiansLogo.png\
	"}}}),

	"Community-Life-Series-Datapack": JSON.stringify({"data": {"repository": {"openGraphImageUrl": "\
		https://repository-images.githubusercontent.com/610039740/b8a8383f-4981-4ccc-b7d8-0344b2f1208f\
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

async function fetchModrinth() {
	const url = "https://api.modrinth.com/v2/user/skykittenpuppy/projects";
	await fetch(url)
	.then(async function(response) {
	  	await response.json()
		.then(async function(projects){
			await projects
			.forEach(async function(project){
				let sortTag = "Minecraft"

				let bg = document.createElement("div");
				bg.style = "--project-colour: #"+project.color.toString(16)+";";
				bg.classList = "projectBg";

				let container = document.createElement("div");
				container.classList = "project";
				bg.appendChild(container);

				let icon = document.createElement("img");
				icon.src = project.icon_url;
				icon.classList = "projectIcon";
				container.appendChild(icon);

				let link = document.createElement("a");
				link.innerText = project.title;
				link.href = "https://modrinth.com/"+project.project_type+"/"+project.slug;
				link.classList = "projectName";
				container.appendChild(link);
			
				let favicons = document.createElement("div");
				favicons.classList = "projectFavicons";
				container.appendChild(favicons);
				if (project.loaders.includes("minecraft")) favicons.appendChild(resourcePackFavicon.cloneNode());
				if (project.loaders.includes("datapack")) favicons.appendChild(dataPackFavicon.cloneNode());
				if (project.loaders.includes("fabric")){
					favicons.appendChild(fabricMCFavicon.cloneNode());
					sortTag = "Fabric";
				}
				favicons.appendChild(modrinthFavicon.cloneNode());
			
				let desc = document.createElement("p");
				desc.innerText = project.description;
				desc.classList = "projectDesc";
				container.appendChild(desc);

				let stats = document.createElement("p");
				stats.innerText = "📥 " + project.downloads + " ❤️ " + project.followers;
				stats.classList = "projectStats";
				container.appendChild(stats);

				projectList.push({
					element: bg,
					sortTag: sortTag,
					sortValue: 1000000+project.followers,
				})
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
				let sortTag = ""

				let bg = document.createElement("div");
				bg.style = "--project-colour: #1b1f24;";
				bg.classList = "projectBg";

				let container = document.createElement("div");
				container.classList = "project";
				bg.appendChild(container);

				/*let response2 = await fetch("https://api.github.com/graphql", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(`{
						query: {
							repository(owner: "`+repo.owner.login+`", name: "`+repo.name+`") {
								openGraphImageUrl
							}
						}
					}`)
				})
				await response2.json()
				.then(async function(data){*/
				//})

				let icon = document.createElement("img");
				icon.src = "CDN/ProjectIcons/Github/"+repo.name+".png";
				icon.classList = "projectIcon";
				container.appendChild(icon);

				let link = document.createElement("a");
				link.innerText = repo.name;
				link.href = repo.html_url;
				link.classList = "projectName";
				container.appendChild(link);
			
				let favicons = document.createElement("div");
				favicons.classList = "projectFavicons";
				container.appendChild(favicons);
				if (repo.topics.includes("minecraft-datapack")){
					favicons.appendChild(dataPackFavicon.cloneNode());
					sortTag = "Minecraft";
				}
				if (repo.topics.includes("fabric-mod")){
					favicons.appendChild(fabricMCFavicon.cloneNode());
					sortTag = "Fabric";
				}
				if (repo.topics.includes("hytale")){
					favicons.appendChild(hytaleFavicon.cloneNode());
					sortTag = "Hytale";
				}
				favicons.appendChild(githubFavicon.cloneNode());
			
				let desc = document.createElement("p");
				desc.innerText = repo.description;
				desc.classList = "projectDesc";
				container.appendChild(desc);

				let stats = document.createElement("p");
				stats.innerText = "👀 " + repo.watchers_count + " ⭐ " + repo.stargazers_count;
				stats.classList = "projectStats";
				container.appendChild(stats);

				projectList.push({
					element: bg,
					sortTag: sortTag,
					sortValue: repo.stargazers_count,
				})
			});
	  	});
	}).catch(err => console.error(err));
}

function addLink(info){
	let bg = document.createElement("div");
	bg.style = "--project-colour: #f16436;";
	bg.classList = "projectBg";

	let container = document.createElement("div");
	container.classList = "project";
	bg.appendChild(container);

	let icon = document.createElement("img");
	icon.src = info.icon;
	icon.classList = "projectIcon";
	container.appendChild(icon);

	let link = document.createElement("a");
	link.innerText = info.name;
	link.href = info.link;
	link.classList = "projectName";
	container.appendChild(link);

	let favicons = document.createElement("div");
	favicons.classList = "projectFavicons";
	container.appendChild(favicons);
	for (let favicon of info.favicons){
		favicons.appendChild(favicon.cloneNode());
	}

	let desc = document.createElement("p");
	desc.innerText = info.description;
	desc.classList = "projectDesc";
	container.appendChild(desc);

	projectList.push({
		element: bg,
		sortTag: info.sortTag,
		sortValue: info.sortValue,
	})
}
"a".charCodeAt(0)
function loadProjects(){
	projectList.sort((a, b) => {
		if (b.sortTag != a.sortTag){
			if (b.sortTag == "Hytale") return 1
			else if (a.sortTag == "Hytale") return -1
			else if (b.sortTag == "Minecraft") return 1
			else if (a.sortTag == "Minecraft") return -1
			else return b.sortTag.charCodeAt(0) - a.sortTag.charCodeAt(0)
		}
		else return b.sortValue - a.sortValue
	})
	for (let project of projectList)
		projectSection.appendChild(project.element)
}

(async () => {
	await fetchModrinth();
	await fetchGithub();
	addLink({
		name: "Armed With Ammo",
		description: "Adds ammo and makes guns functional!",
		icon: "https://media.forgecdn.net/avatars/thumbnails/1630/269/256/256/639045278596288956.png",
		link: "https://www.curseforge.com/hytale/mods/armed-with-ammo",
		favicons: [hytaleFavicon, curseforgeFavicon],
		sortTag: "Hytale",
		sortValue: -1000000,
	});
	loadProjects();
})();