var myvideo, play, bar, progressbar;

function start(){
	myvideo=document.getElementById("myvideo");
	play=document.getElementById("play");
	bar=document.getElementById("bar");
	progressbar=document.getElementById("progressbar");
	
	play.addEventListener("click",clicking,false);
	progressbar.addEventListener("click",forward,false);
	}
	
function clicking(){
	if((myvideo.paused==false)&&(myvideo.ended==false)) {
		myvideo.pause();
		play.innerHTML="Play";}
	else{
		myvideo.play();
		play.innerHTML="Pause";}
		}
		
window.addEventListener("load",start,false);
