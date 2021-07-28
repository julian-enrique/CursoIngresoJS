/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var bandera;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	numeroMaximo=0;
	numeroMinimo=0;
	bandera=0;
	respuesta='si';
	while(respuesta=="si"){
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);

		if(bandera==0){
			numeroMaximo=numeroIngresado;
			numeroMinimo=numeroIngresado;
			bandera=1;
		}
		if(numeroIngresado>numeroMaximo){
			numeroMaximo=numeroIngresado;
		}else{
			if(numeroIngresado<numeroMinimo){
				numeroMinimo=numeroIngresado;
			}
		}
		respuesta=prompt("desea continuar?");
	}
	document.getElementById('txtIdMaximo').value="numero maximo "+numeroMaximo;
	document.getElementById('txtIdMinimo').value="numero minimo "+numeroMinimo;
}//FIN DE LA FUNCIÓN