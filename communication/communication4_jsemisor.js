//JavaScript Document

function start(){
	var button=document.getElementById("button");
	button.addEventListener("click",send,false);
	}
	
function send(){
	var message=document.getElementById("message").value;
	var iframe=document.getElementById("iframe");
	iframe.contentWindow.postMessage(message,"*");
	}

window.addEventListener("load",start,false);
