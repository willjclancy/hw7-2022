var video = document.querySelector("#player1");


window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.loop = false;
	video.autoplay = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	console.log(document.querySelector("#volume").innerHTML= video.volume *100 + "%");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video.playbackRate*=.90;
	console.log("Speed is: ", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video.playbackRate*=1.1;
	console.log("Speed is: ", video.playbackRate);
});

document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted == true) {
		video.muted = false;
		console.log("Volume unmuted set to ", video.volume);
		this.innerHTML = "Mute"}
	else {
		video.muted = true;
		console.log("Volume muted");
		this.innerHTML = "Unmute";
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log("The current value is", video.volume);
	video.volume = this.value/100;
	console.log("The current value is", video.volume);
	console.log(document.querySelector("#volume").innerHTML= video.volume *100 + "%");
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 10;
	console.log("Jumped 10 to", video.currentTime);
	if(video.ended == true) {video.currentTime = 0,
	console.log("Jumped past duration, restart to", video.currentTime)}
});

document.querySelector("#vintage").addEventListener("click", function() { 
	video.classList.add("oldSchool");
	console.log("Old school styling");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Original styling");
});


