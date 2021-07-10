function mostrar()
{var edad;
	edad=parseInt(document.getElementById('txtIdEdad').value); 
	
if(edad<13){
	alert("es niño");
}
else{
if(edad>=13&&edad<=17){
	alert("es adolescente");
}
else{
if(edad>=18&&edad<=64){
	alert("es adulto");
}
else{
if(edad>=65){
	alert("es anciano");
}
}
}
}
	
	

}//FIN DE LA FUNCIÓN