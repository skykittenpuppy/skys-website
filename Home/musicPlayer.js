const link = document.querySelector("#link");
const thumb = document.querySelector("#thumb");
const title = document.querySelector("#title");
const playpause = document.querySelector("#playpause");
const volume = document.querySelector("#volume");
var player;

function onYouTubeIframeAPIReady() {
	player = new YT.Player('ytplayer', {
		width: 0,
		height: 0,
		playerVars: {
			'controls': 0,
			'disblekb': 1,
			'fs': 0,
			'listType': "playlist",
			'playlist': "9wQnO-Katws,VA69HxJW23E,SEMVNUItKZc,PRXS2kDFVIY",
			'loop': 1,
			'rel': 0,
		},
		events: {
			'onReady': function (e) {
				volume.value = 15;
				volume.dispatchEvent(new Event("input"));
				changeTrack();
			},
			'onStateChange': function (e) {
				changeTrack();
			}
		}
	});
}

playpause.addEventListener("click", (event) => {
	if (player.getPlayerState() == 1) {
		player.pauseVideo();
	} else {
		player.playVideo();
	}
})
volume.addEventListener("input", (event) => {
	player.setVolume(volume.value);
	volume.style.setProperty("--volume-value", Math.max(2, volume.value)+"%");
})

function changeTrack() {
	link.href = player.getVideoUrl();
	thumb.src = "https://i3.ytimg.com/vi/"+player.getVideoData().video_id+"/default.jpg";
	title.innerText = player.getVideoData().title;
	playpause.className = player.getPlayerState() == 1 ? "pause" : "play";
	player.setVolume(volume.value);
}