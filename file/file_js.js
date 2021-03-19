//JavaScript Document

function start(){
	dataarea=document.getElementById("dataarea");
	var archives=document.getElementById("archives");
	archives.addEventListener("change",process,false);
	}
	
function process(e){
	var archives=e.target.files;
	var my_archive=archives[0];
	var reader=new FileReader();
	reader.readAsText(my_archive,"iso-8859-1");
	reader.addEventListener("load",show_info,false);
	}
	
function show_info(e){
	var result=e.target.result;
	dataarea.innerHTML=result;
	}

window.addEventListener("load",start,false);
