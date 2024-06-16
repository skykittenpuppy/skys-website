const thumbLink = document.querySelector("#thumbLink");
const thumbImg = document.querySelector("#thumbImg");
const title = document.querySelector("#title");
const time = document.querySelector("#time");
const duration = document.querySelector("#duration");
const prev = document.querySelector("#prev");
const play = document.querySelector("#play");
const next = document.querySelector("#next");
const volume = document.querySelector("#volume");
var player;

function onYouTubeIframeAPIReady() {
	player = new YT.Player('ytplayer', {
		width: 0,
		height: 0,
		playerVars: {
			'autoplay': 0,//1,
			'controls': 0,
			'disblekb': 1,
			'fs': 0,
			'listType': "playlist",
			'playlist': "f1iwhiebHLA,Ja2J2WkmjNg,LdTIl4FS-58,YfXpNIQbdjo,ZGCckws9SJI,BmmMfZR8C80,VA69HxJW23E,SEMVNUItKZc,PRXS2kDFVIY",
			'loop': 1,
			'rel': 0,
		},
		events: {
			'onReady': function (e) {
				volume.value = localStorage.getItem("musicVolume") || 15;
				volume.dispatchEvent(new Event("input"));
				updatePlayer();
				setInterval(() => {
					var tim = Math.floor(player.getCurrentTime())
					time.innerText = Math.floor(tim/60)+":"+(tim%60).toString().padStart(2, '0');
				}, 100)
				//player.playVideo();
			},
			'onStateChange': function (e) {
				updatePlayer();
			}
		}
	});
}

play.addEventListener("click", (event) => {
	if (player.getPlayerState() == 1) {
		player.pauseVideo();
	} else {
		player.playVideo();
	}
})
prev.addEventListener("click", (event) => {
	player.previousVideo();
	player.playVideo();
})
next.addEventListener("click", (event) => {
	player.nextVideo();
	player.playVideo();
})
volume.addEventListener("input", (event) => {
	localStorage.setItem("musicVolume", volume.value);
	player.setVolume(volume.value);
	var volProp = volume.value
	if (volProp > 99 || volProp < 11) {volProp = volProp*1 + 2}
	volume.style.setProperty("--volume-value", volProp+"%");
})


function updatePlayer() {
	var data = player.getVideoData()

	thumbLink.href = player.getVideoUrl();
	
	thumbImg.src = data.video_id ? "https://i3.ytimg.com/vi/"+data.video_id+"/hqdefault.jpg" : "../Images/cloud.PNG";
	
	title.innerText = data.title || "Loading...";
	
	var dur = Math.floor(player.getDuration())
	duration.innerText = Math.floor(dur/60)+":"+(dur%60).toString().padStart(2, '0');
	
	play.value = player.getPlayerState() == 1 ? "B" : "A";
	
	player.setVolume(volume.value);
}