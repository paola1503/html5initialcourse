//JavaScript Document

function start(){
	var button=document.getElementById("button");
	button.addEventListener("click",send,false);
	window.addEventListener("message",receive,false);
	receiver=document.getElementById("receivingarea");
	}
	
function send(){
	var message=document.getElementById("message").value;
	var iframe=document.getElementById("iframe");
	iframe.contentWindow.postMessage(message,"*");
	}
	
function receive(e){
	receiver.innerHTML+=e.data;
	}

window.addEventListener("load",start,false);
