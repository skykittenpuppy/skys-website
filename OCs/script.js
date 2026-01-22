const OCsSection = document.getElementById("OCs").getElementsByClassName("content")[0];

let WIPWarnInner = document.createElement("div");
WIPWarnInner.classList = "ocInner";
OCsSection.appendChild(WIPWarnInner)
let WIPWarn = document.createElement("div");
WIPWarn.innerText = "Work In Progress";
WIPWarn.classList = "WIPWarn";
WIPWarnInner.appendChild(WIPWarn)

function createOCElement(Name, Icon){
	let inner = document.createElement("div");
	inner.classList = "ocInner";

	let icon = document.createElement("img");
	icon.src = Icon;
	icon.classList = "ocIcon";
	inner.appendChild(icon);

	let name = document.createElement("a");
	name.innerText = Name;
	name.classList = "ocName";
	inner.appendChild(name);

	OCsSection.appendChild(inner)
}

createOCElement("Kit", "CDN/OCs/Kit (Plushie)/art/icon.png")
createOCElement("Peony", "CDN/OCs/Peony (Beegirl)/art/icon.png")
createOCElement("Nora", "CDN/OCs/Nora (Sculk Cult⁄Scientist Moth)/art/icon.png")
createOCElement("B-34", "CDN/OCs/B-34 (Bee Robot)/art/icon.png")
createOCElement("Mindy", "CDN/OCs/Mindy (Cat, Adopt)/art/icon.png")
createOCElement("Celeste", "CDN/OCs/Celeste (Observer, Spellbound)/art/icon.png")