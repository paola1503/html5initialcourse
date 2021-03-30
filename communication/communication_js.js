//JavaScript Document

function start(){
	dataarea=document.getElementById("dataarea");
	progressarea=document.getElementById("progressarea");
	var button=document.getElementById("button");
	button.addEventListener("click",read,false);
	}
	
function read(){
	var url="videos/videohello.mp4";
	var request=new XMLHttpRequest();
	request.addEventListener("loadstart",bar_start,false);
	request.addEventListener("progress",bar_state,false);
	request.addEventListener("load",show,false);
	request.open("GET",url,true);
	request.send(null);
	}
	
function bar_start(){
	dataarea.innerHTML="<progress value='0' max='100'></progress>";
	}
	
function bar_state(e){
	var percentage=parseInt(e.loaded/e.total*100);
	var progressbar=dataarea.querySelector("progress");
	progressbar.value=percentage;
	progress_area.innerHTML=percentage+"%";
	}
	
function show(e){
	dataarea.innerHTML="File has been read!";
	}

window.addEventListener("load",start,false);
