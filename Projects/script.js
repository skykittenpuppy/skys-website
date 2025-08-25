const projectSection = document.getElementById("Projects").getElementsByClassName("content")[0];

var prefetchedOpenGraphImageUrl = {
	"Community-Life-Series-Datapack": JSON.stringify({"data": {"repository": {"openGraphImageUrl": "\
		https://repository-images.githubusercontent.com/610039740/b8a8383f-4981-4ccc-b7d8-0344b2f1208f\
	"}}}),
	"Datapack-Construct": JSON.stringify({"data": {"repository": {"openGraphImageUrl": "\
		https://repository-images.githubusercontent.com/909895930/2550c775-637c-4eb1-9717-d17b256082a9\
	"}}}),
	"Datapack-Delight": JSON.stringify({"data": {"repository": {"openGraphImageUrl": "\
		https://repository-images.githubusercontent.com/1025386411/ea04866d-7476-49a0-8aa7-303e97437211\
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

async function addModrinth() {
	const url = "https://api.modrinth.com/v2/user/skykittenpuppy/projects";
	await fetch(url)
	.then(async function(response) {
	  	await response.json()
		.then(async function(projects){
			await projects
			.sort((a, b) => b.downloads - a.downloads)
			.forEach(async function(project){
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
				stats.innerText = "📥 " + project.downloads + " ❤️ " + project.followers;
				stats.classList = "projectStats";
				container.appendChild(stats);
			
				projectSection.appendChild(container);
			});
	  	});
	}).catch(err => console.error(err));
}

async function addGithub(){
	const url = 'https://api.github.com/users/skykittenpuppy/repos';
	await fetch(url)
	.then(async function(response) {
	  	await response.json()
		.then(async function(repos){
			await repos
			.filter((a) => a.topics.includes("site-project"))
			.sort((a, b) => b.watchers_count - a.watchers_count)
			.forEach(async function(repo){
				let container = document.createElement("div");
				container.classList = "project";

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
					data = JSON.parse(prefetchedOpenGraphImageUrl[repo.name]);
					let icon = document.createElement("img");
					icon.src = data.data.repository.openGraphImageUrl;
					icon.classList = "projectIcon";
					container.appendChild(icon);
				//})

				let link = document.createElement("a");
				link.innerText = repo.name;
				link.href = repo.html_url;
				link.classList = "projectName";
				container.appendChild(link);
			
				let favicon = document.createElement("img");
				favicon.src = "CDN/Projects/github.png";
				favicon.classList = "projectFavicon";
				container.appendChild(favicon);
			
				let desc = document.createElement("p");
				desc.innerText = repo.description;
				desc.classList = "projectDesc";
				container.appendChild(desc);

				let stats = document.createElement("p");
				stats.innerText = "👀 " + repo.watchers_count + " ⭐ " + repo.stargazers_count;
				stats.classList = "projectStats";
				container.appendChild(stats);
			
				projectSection.appendChild(container);
			});
	  	});
	}).catch(err => console.error(err));
}

/*function addLink(info){
	let container = document.createElement("div");
	container.classList = "project";

	let icon = document.createElement("img");
	icon.src = "../CDN/Projects/"+info.name+".png";
	icon.classList = "projectIcon";
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
	desc.classList = "projectDesc";
	container.appendChild(desc);

	projectSection.appendChild(container);
}*/

(async () => {
	await addModrinth();
	await addGithub();
})();