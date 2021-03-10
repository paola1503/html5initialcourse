//JavaScript Document

function start(){
	var mybutton=document.getElementById("get_location");
	mybutton.addEventListener("click",get_it,false);
	}
	
function get_it(){
	navigator.geolocation.getCurrentPosition(show_location);
	}
	
function show_location(position){
	var location=document.getElementById("location");
	var mylocation="";
	mylocation+="Latitude: " + position.coords.latitude + "<br>";
	mylocation+="Longitude: " + position.coords.longitude + "<br>";
	mylocation+="Accuracy: " + position.coords.accuracy + "<br>";
	location.innerHTML=mylocation;
	}

window.addEventListener("load",start,false);
