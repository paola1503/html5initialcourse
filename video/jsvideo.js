var myvideo, play, bar, progressbar, maximum;

maximum=743;

function start(){
	myvideo=document.getElementById("myvideo");
	play=document.getElementById("play");
	bar=document.getElementById("bar");
	progressbar=document.getElementById("progressbar");
	
	play.addEventListener("click",clicking,false);
	bar.addEventListener("click",movebar,false);
	}
	
function clicking(){
	if((myvideo.paused==false)&&(myvideo.ended==false)){
		myvideo.pause();
		play.innerHTML="Play";}
	else{
		myvideo.play();
		play.innerHTML="Pause";
		
		bucle=setInterval(progress,30);}
		}
		
function progress(){
	if(myvideo.ended==false){
		var total=parseInt(myvideo.currentTime*maximum/myvideo.duration);
		progressbar.style.width=total+"px";}
		}
		
function movebar(position){
	if((myvideo.paused==false)&&(myvideo.ended==false)){
		var mouseX=position.pageX-bar.offsetLeft;
		var newtime=mouseX*myvideo.duration/maximum;
		myvideo.currentTime=newtime;
		progressbar.style.width=mouseX+"px";}
		}
		
window.addEventListener("load",start,false);
