//JavaScript Document

function start(){
	dataarea=document.getElementById("dataarea");
	var button=document.getElementById("files");
	button.addEventListener("change",upload_files,false);
	}
	
function upload_files(e){
	var files=e.target.files;
	var file=files[0];
	var url="process.php"; //I haven't created this document as I don't know PHP yet
	var request=new XMLHttpRequest();
	var upload=request.upload;
	upload.addEventListener("loadstart",bar_start,false);
	upload.addEventListener("progress",bar_state,false);
	upload.addEvenetListener("load",show,false);
	request.open("POST",url,true);
	var data=new FormData();
	data.append("file",file);
	request.send(data);
	}
	
function bar_start(){
	dataarea.innerHTML="<progress value='0' max='100'></progress>";
	}
	
function bar_state(e){
	var percentage=parseInt(e.loaded/e.total*100);
	var progressbar=dataarea.queryselector("progress");
	progressbar.value=percentage;
	progressarea.innerHTML=percentage+ "%";
	}
	
function show(e){
	dataarea.innerHTML="Done!";
	}

window.addEventListener("load",start,false);
