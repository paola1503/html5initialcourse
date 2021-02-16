var mozartsong, play, bar, progressbar, maximum;

maximum=743;

function start(){
	mozartsong=document.getElementById("mozartsong");
	play=document.getElementById("play");
	bar=document.getElementById("bar");
	progressbar=document.getElementById("progressbar");
	
	play.addEventListener("click",clicking,false);
	bar.addEventListener("click",movebar,false);
	}
	
function clicking(){
	if((mozartsong.paused==false)&&(mozartsong.ended==false)){
		mozartsong.pause();
		play.innerHTML="Play";}
	else{
		mozartsong.play();
		play.innerHTML="Pause";
		
		bucle=setInterval(progress,30);}
		}
		
function progress(){
	if(mozartsong.ended==false){
		var total=parseInt(mozartsong.currentTime*maximum/mozartsong.duration);
		progressbar.style.width=total+"px";}
		}
		
function movebar(position){
	if((mozartsong.paused==false)&&(mozartsong.ended==false)){
		var mouseX=position.pageX-bar.offsetLeft;
		var newtime=mouseX*mozartsong.duration/maximum;
		mozartsong.currentTime=newtime;
		progressbar.style.width=mouseX+"px";}
		}
		
window.addEventListener("load",start,false);
