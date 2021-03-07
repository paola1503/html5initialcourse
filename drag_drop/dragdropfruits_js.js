//JavaScript Document

var elem_destination;

function start(){
	var images=document.querySelectorAll("#imagebox img");
	for (var i=0;i<images.length;i++){
		images[i].addEventListener("dragstart",start_drag,false);
		images[i].addEventListener("dragend",end_drag,false);
		}
		
	elem_destination=document.getElementById("destinationarea");
	elem_destination.addEventListener("dragenter",entering,false);
	elem_destination.addEventListener("dragover",function(e){
		e.preventDefault();},false);
	elem_destination.addEventListener("drop",dropped,false);
	elem_destination.addEventListener("dragleave",leaving,false);
	}
		
function start_drag(e){
	var element=e.target;
	e.dataTransfer.setData("text",element.getAttribute("id"));
	}
	
function entering(e){
	e.preventDefault();
    elem_destination.style.background="rgba(8,252,25,.8)";
	}
	
function end_drag(e){
	var element=e.target;
	element.style.visibility="hidden";
	}
	
function dropped(e){
	e.preventDefault();
	var id=e.dataTransfer.getData("text");
	if(id!="icecream"){
    	var src=document.getElementById(id).src;
        elem_destination.innerHTML="<img src='"+ src +"' height='200'>";
        }
    else{
        elem_destination.innerHTML="That is not a fruit, try again!";
        elem_destination.style.background="#FA0D29";
        }
	}
	
function leaving(e){
	e.preventDefault();
	elem_destination.style.background="#FFFFFF";
	}

window.addEventListener("load",start,false);
