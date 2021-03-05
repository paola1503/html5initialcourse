//JavaScript Document

var elem_origin;
var elem_destination;

function start(){
	elem_origin=document.getElementById("image");
	elem_origin.addEventListener("dragstart",start_drag,false);
	
	elem_destination=document.getElementById("destinationarea");
	elem_destination.addEventListener("dragover",function(e){
	e.preventDefault();},false);
	
	elem_origin.addEventListener("dragend",finished,false);
	elem_destination.addEventListener("drop",function(){alert("Don't disturb me when I'm eating");},false);
	elem_destination.addEventListener("drop",dropped,false);
	}
	
function start_drag(e){
	var code="<img src='"+elem_origin.getAttribute("src")+"'>";
	e.dataTransfer.setData("Text",code);
	}
	
function finished(e){
	var element=e.target;
	element.style.visibility="hidden";
	}
	
function dropped(e){
	e.preventDefault();
	elem_destination.innerHTML=e.dataTransfer.getData("Text");
	}

window.addEventListener("load",start,false);
