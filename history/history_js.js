// JavaScript Document

function start(){
	dataarea=document.getElementById("dataarea");
	url=document.getElementById("url");
	url.addEventListener("click",changeurl,false);
	}
	
function changeurl(){
	dataarea.innerHTML="Welcome to Page 2";
	window.history.pushState(null,null,"page2.html");
	}

window.addEventListener("load",start,false);
