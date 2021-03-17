//JavaScript Document

var db;

function start(){
	dataarea=document.getElementById("dataarea");
	button=document.getElementById("save");
	button.addEventListner("click",addobject,false);
	var request=indexedDB.open("mydatabase");
	request.onsuccess=function(e){
		db=e.target.result;
		}
	request.onupgradeneeded=function(e){
		db.createObjectStore("people",{keyPath: "key"});
		}
	}

window.addEventListener("load",start,false);
