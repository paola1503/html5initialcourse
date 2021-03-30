//JavaScript Document


function start(){
	dataarea=document.getElementById("dataarea");
	var button=document.getElementById("button");
	button.addEventListener("click",write_files,false);
	navigator.webkitPersistentStorage.requestQuota(5*1024*1024,access);
	}
	
function access(){
	window.webkitRequestFileSystem(PERSISTENT,5*1024*1024,create_system,fail);
	}
	
function create_system(system){
	space=system.root;
	}
	
function write_file(){
	var name=document.getElementById("file_origin").value;
	space.getFile(name,{create:true,exclusive:false},function(entry){
		entry.createWriter(write_content,fail);
		},fail);
	}
	
function write_content(fileWriter){
	var text=document.getElementById("text").value;
	fileWriter.onwriteend=success();
	var blob=new Blob([text],{type:"text/html"});
	fileWriter.write(blob);
	}
	
function success(){
	document.getElementById("file_origin").value="";
	document.getElementById("text").value="";
	dataarea.innerHTML="File created successfully";
	}
	
function fail(e){
	alert("Oops, something went wrong: " + e.code);
	}

window.addEventListener("load",start,false);
