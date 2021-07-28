function mostrar()
{
	var destino;

	destino=document.getElementById('txtIdDestino').value;

	if(destino=="Cataratas"||destino=="Mar del plata"){
		alert("hace calor");
	}else{
		alert("hace frio");
	}







/*	switch(destino){
		case "Cataratas":
		case "Mar del plata":
		  alert("Hace calor");
		  break;
		default:
		  alert("hace frio");
		  break;
	}*/
}//FIN DE LA FUNCIÓN