function mostrar()
{
	//tomo el mes
	var mes

	mes=document.getElementById("txtIdMes").value;

	switch(mes){
		case "Septiembre":
		case "Octubtre":
		case "Noviembre":
		case "Diciembre":
		  alert("ya pasamos el invierno");
		  break;
		case "Julio":
		case "Agosto":
		  alert("Abrigate que hace frio");
		  break;
		default:
		  alert("falta para el invierno");
	}



}//FIN DE LA FUNCIÓN