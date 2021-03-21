//JavaScript Document

var dataarea;

function start(){
	dataarea=document.getElementById("dataarea");
	var the_files=document.getElementById("the_files");
	the_files.addEventListener("change",process,false);
	}
	
function process(e){
	var the_files=e.target.files;
	dataarea.innerHTML="";
	var my_file=the_files[0];
	if(!my_file.type.match(/image/)){
		alert("Please, select an image");
		}
	else{
		dataarea.innerHTML+="File name: "+my_file.name+"<br>";
		dataarea.innerHTML+="File size: "+Math.round(my_file.size/1024)+"kb <br>";
		}
	var reader=new FileReader();
	reader.readAsDataURL(my_file);
	reader.addEventListener("load",show_info,false);
	}
	
function show_info(e){
	var the_result=e.target.result;
	dataarea.innerHTML+="<img src='"+the_result+"' width='85%'>";
	}

window.addEventListener("load",start,false);
