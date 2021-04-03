//JavaScript Document

function start(){
	window.addEventListener("message",receiver,false);
	}
	
function receiver(e){
	var messagesarea=document.getElementById("messagesarea");
	messagesarea.innerHTML+="Message from: " + e.origin + "<br>";
	messagesarea.innerHTML+="Message: " + e.data + "<br>";
	}

window.addEventListener("load",start,false);
