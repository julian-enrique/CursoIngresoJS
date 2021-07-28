function mostrar()
{
	var destino;

	destino=document.getElementById("txtIdDestino").value;

	if(destino=="Bariloche"){
		alert("este");
	}else{
		if(destino=="Cataratas"){
			alert("norte");
		}else{
			if(destino=="Mar del plata"){
				alert("oeste");
			}else{
				alert("sur");
			}
		}
	}















/*	switch(destino){
		case "Bariloche":
		  alert("este");
		  break;
		case "Cataratas":
		  alert("norte");
		  break;
		case "Mar del plata":
		  alert("oeste");
		  break;
		default:
		  alert("sur");
		  break;
	}*/

}//FIN DE LA FUNCIÓN