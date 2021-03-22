//JavaScript Document

function start(){
	dataarea=document.getElementById("dataarea");
	var button=document.getElementById("button");
	button.addEventListener("click",create,false);
	navigator.webkitPersistentStorage.requestQuota(5*1024*1024,access);
	}
	
function access(){
	window.webkitRequestFileSystem(PERSISTENT,5*1024*1024,createsystem,fail);
	}
	
function createsystem(system){
	space=system.root;
	}
	
function create(){
	var file_name=document.getElementById("entry").value;
	if (file_name!=""){
		space.getFile(file_name,{create:true,exclusive:false},show,fail);
		}
	}
	
function show(entry){
	document.getElementById("entry").value="";
	dataarea.innerHTML="Succeeded creating space and file! <br>";
	dataarea.innerHTML+="Name: " + entry.name + "<br>";
	dataarea.innerHTML+="Path: " + entry.fullPath + "<br>";
	}
	
function fail(e){
	alert("Oops, something went wrong: " + e.code);
	}

window.addEventListener("load",start,false);
