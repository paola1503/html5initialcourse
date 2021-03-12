//JavaScript Document

function start(){
	var button=document.getElementById("save")
	button.addEventListener("click",newitem,false);
	}
	
function newitem(){
	var key=document.getElementById("key").value;
	var value=document.getElementById("value").value;
	sessionStorage.setItem(key,value);
	read_show(key);
	}
	
function read_show(key){
	var dataarea=document.getElementById("dataarea");
	var thevalue=sessionStorage.getItem(key);
	dataarea.innerHTML="<div>Key: " + key + "--" + "Value: " + thevalue + "</div>";
	}

window.addEventListener("load",start,false);
