//JavaScript Document


function start(){
	dataarea=document.getElementById("dataarea");
	var button=document.getElementById("button");
	button.addEventListener("click",read_file,false);
	navigator.webkitPersistentStorage.requestQuota(5*1024*1024,access);
	}
	
function access(){
	window.webkitRequestFileSystem(PERSISTENT,5*1024*1024,create_system,fail);
	}
	
function create_system(system){
	space=system.root;
	}
	
function read_file(){
	var name=document.getElementById("file_origin").value;
	space.getFile(name,{create:true,exclusive:false},function(entry){
		entry.file(read_content,fail);
		},fail);
	}
	
function read_content(file){
	dataarea.innerHTML="Name: " + file.name + "<br>";
	dataarea.innerHTML+="Size: " + file.size +"bytes <br>";
	var reader=new FileReader();
	reader.onload=success;
	reader.readAsText(file);
	}
	
function success(e){
	var result=e.target.result;
	document.getElementById("file_origin").value="";
	dataarea.innerHTML+="Content: " + result;
	}
	
function fail(e){
	alert("Oops, something went wrong: " + e.code);
	}

window.addEventListener("load",start,false);
