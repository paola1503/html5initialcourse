//JavaScript Document

function start(){
	window.addEventListener("message",receiver,false);
	}
	
function receiver(e){
	var messagesarea=document.getElementById("messagesarea");
	messagesarea.innerHTML+="Message from: " + e.origin + "<br>";
	messagesarea.innerHTML+="Message: " + e.data + "<br>";
	e.source.postMessage("The message has been correctly received" +"<br>",e.origin);
	}

window.addEventListener("load",start,false);
