//JavaScript Document

function start(){
	var button=document.getElementById("save")
	button.addEventListener("click",new_item,false);
	}
	
function new_item(){
	var key=document.getElementById("key").value;
	var value=document.getElementById("value").value;
	localStorage.setItem(key,value);
	read_show(key);
	document.getElementById("key").value="";
	document.getElementById("value").value="";
	}
	
function read_show(key){
	var dataarea=document.getElementById("dataarea");
	dataarea.innerHTML='<div><button onclick="remove_all()"">Remove all</button></div>';
	for(i=0;i<localStorage.length;i++){
		var key=localStorage.key(i);
		var thevalue=localStorage.getItem(key);
		dataarea.innerHTML+='<div>' + key + '--' + thevalue + '<br><button onclick="remove_item(\''+key+'\')">Remove</button></div>'}
	}
	
function remove_all(){
	if(confirm("Are you sure?")){
		localStorage.clear();
		read_show();
		}
	}
	
function remove_item(key){
	if(confirm("Are you sure?")){
		localStorage.removeItem(key);
		read_show();
		}
	}

window.addEventListener("load",start,false);
