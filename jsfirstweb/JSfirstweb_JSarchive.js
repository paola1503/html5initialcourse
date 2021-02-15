//JavaScript Document

function execute(){
	var elements=document.querySelectorAll("#options span");
	for(var i=0;i<elements.length;i++){
	elements[i].onclick=treasure;}
}

function treasure(){
	alert("You found the treasure!");}
	
window.onload=execute;
	
