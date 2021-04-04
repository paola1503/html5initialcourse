// JavaScript Document

function start(){
	dataarea=document.getElementById("dataarea");
	var button=document.getElementById("button");
	button.addEventListener("click",send,false);
	worker=new Worker("webworker_workerjs.js");
	worker.addEventListener("message",received,false);
	}
	
function send(){
	var name=document.getElementById("name").value;
	worker.postMessage(name);
	}
	
function received(e){
	dataarea.innerHTML=e.data;
	}

window.addEventListener("load",start,false);
