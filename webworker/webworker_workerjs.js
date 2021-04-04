// JavaScript Document

addEventListener("message",received_message,false);

function received_message(e){
	var reply="Your name is " +e.data;
	postMessage(reply);
	}
