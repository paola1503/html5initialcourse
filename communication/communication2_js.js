//JavaScript Document

function start(){
	dataarea=document.getElementById("dataarea");
	var button=document.getElementById("button");
	button.addEventListener("click",send_data,false);
	}
	
function send_data(){
	the_name=document.getElementById("thename").value;
	the_surname=document.getElementById("thesurname").value;
	var data=new FormData();
	data.append("name",the_name);
	data.append("surname",the_surname);
	var url="communication2.php";
	var request=new XMLTHttpRequest();
	request.addEventListener("load",show,false);
	request.open("POST",url,true);
	request.send(data);
	}
	
function show(e){
	dataarea.innerHTML=e.target.responseText;
	}

window.addEventListener("load",start,false);
