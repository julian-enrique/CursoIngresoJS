/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var clave;
	clave=prompt("ingrese el número clave.");

	while(clave!="utn750"){
		clave=prompt("Contraseña incorrecta. Intente nuevamente");
	}
	alert("EXCELENTE");
	
}//FIN DE LA FUNCIÓN
