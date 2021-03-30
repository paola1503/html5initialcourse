//JavaScript Document


function start(){
	dataarea=document.getElementById("dataarea");
	var button=document.getElementById("button");
	button.addEventListener("click",modify,false);
	navigator.webkitPersistentStorage.requestQuota(5*1024*1024,access);
	}
	
function access(){
	window.webkitRequestFileSystem(PERSISTENT,5*1024*1024,create_system,fail);
	}
	
function create_system(system){
	space=system.root;
	path="";
	show();
	}
	
function modify(){
	var origin=document.getElementById(file_origin).value;
	var destination=document.getElementById(directory_destination).value;
	space.getFile(origin,null,function(file){
		space.getDirectory(destination,null,function(directory){
			file.moveTo(directory,null,success,fail);
			},fail);
		},fail);
	}
	
function success(){
	document.getElementById("file_origin").value="";
	document.getElementById("directory_destination").value="";
	show();
	}
	
function show(){
	//document.getElementById("file_origin").value="";
	dataarea.innerHTML="";
	space.getDirectory(path,null,read_directory,fail);
	}
	
function read_directory(directory){
	reader=directory.createReader();
	read();
	}
	
function read(){
	reader.readEntries(function(files){
		if(files.length){
			list(files);
			}
		},fail);
	}
	
function list(files){
	for(var i=0;i<files.length;i++){
		if(files[i].isFile){
			dataarea.innerHTML+=files[i].name+"<br>";
			}else if(files[i].isDirectory){
				dataarea.innerHTML+="<span class='directory'>"+files[i].name+"</span><br>";
				}
		}
	}
	
function change_directory(newpath){
	path=path+newpath +"/";
	show();
	}
	
function fail(e){
	alert("Oops, something went wrong: " + e.code);
	}

window.addEventListener("load",start,false);
