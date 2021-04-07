// JavaScript Document

function start(){
	dataarea=document.getElementById("dataarea");
	url=document.getElementById("url");
	url.addEventListener("click",changeurl,false);
	window.addEventListener("popstate",newurl,false);
	window.history.replaceState(1,null);
	}
	
function changeurl(){
	show(2);
	window.history.pushState(2,null,"page2.html");
	}
	
function newurl(e){
	show(e.state);
	}
	
function show(current){
	dataarea.innerHTML="This is Page " + current;
	}

window.addEventListener("load",start,false);
