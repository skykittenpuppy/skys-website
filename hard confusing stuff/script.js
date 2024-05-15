fetch("testing/thing.html")
	.then(stream => stream.text())
	.then(text => define(text))

function define(html) {
	class Element extends HTMLElement {
		constructor() {
			super();
			const shadow = this.attachShadow({mode: 'open'});
			shadow.innerHTML = html;
		}
	}
	customElements.define("music-player", Element)
}
/*class MusicPlayer extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		const shadow = this.attachShadow({mode: "open"});

		const thumbLink = document.createElement("a");
		thumbLink.setAttribute("id", "thumbLink");
		const thumbImg = document.createElement("img");
		thumbImg.setAttribute("id", "thumbImg");

		const ytPlayer = document.createElement("div");
		ytPlayer.setAttribute("id", "ytPlayer");

		const info = document.createElement("div");
		info.setAttribute("id", "info");
		const title = document.createElement("b");
		title.setAttribute("id", "title");
		const length = document.createElement("span");
		length.setAttribute("id", "length");
		const time = document.createElement("p");
		time.setAttribute("id", "time");
		const slash = document.createElement("p");
		const duration = document.createElement("p");
		duration.setAttribute("id", "duration");

		const buttons = document.createElement("div");
		buttons.setAttribute("id", "buttons");
		const prev = document.createElement("input");
		prev.setAttribute("id", "prev");
		const play = document.createElement("input");
		play.setAttribute("id", "play");
		const next = document.createElement("input");
		next.setAttribute("id", "next");

		const volume = document.createElement("input");
		volume.setAttribute("id", "volume");
		volume.setAttribute("type", "range");
		volume.setAttribute("min", "0");
		volume.setAttribute("max", "100");
		volume.setAttribute("step", "5");
		volume.setAttribute("value", "0");

		shadow.appendChild(thumbLink);
		thumbLink.appendChild(thumbImg);
		shadow.appendChild(ytPlayer);
		shadow.appendChild(info);
		info.appendChild(title);
		info.appendChild(length);
		length.appendChild(time);
		length.appendChild(slash);
		length.appendChild(duration);
		shadow.appendChild(buttons);
		buttons.appendChild(prev);
		buttons.appendChild(play);
		buttons.appendChild(next);
		shadow.appendChild(volume);
	}
}
customElements.define("music-player", MusicPlayer);*/