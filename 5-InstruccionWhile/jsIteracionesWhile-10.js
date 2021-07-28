/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var contadorPositivos=0;
	var contadorNegativos=0;
	var contadorCeros=0;
	var contadorPares=0;
	var acumuladorPositivos=0;
	var acumuladorNegativos=0;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;

	respuesta="si";

	while(respuesta=="si")
	{ 	numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);

		if(numeroIngresado>0){
			acumuladorPositivos=acumuladorPositivos+numeroIngresado;
			contadorPositivos=contadorPositivos+1;
		}
		else{
			if(numeroIngresado<0){
				acumuladorNegativos=acumuladorNegativos+numeroIngresado;
				contadorNegativos=contadorNegativos+1;
			}
			else{
				contadorCeros=contadorCeros+1;
			}
		if(numeroIngresado%2==0){
			contadorPares=contadorPares+1;
		}
		
		respuesta=prompt("desea continuar?");
		}
	}//fin del while
	promedioPositivos=acumuladorPositivos/contadorPositivos;
	promedioNegativos=acumuladorNegativos/contadorNegativos;
	diferencia=acumuladorPositivos-acumuladorNegativos;

	
	document.write("Suma de los negativos "+acumuladorNegativos);
	document.write("Suma de los positivos "+acumuladorPositivos);
	document.write("Cantidad de positivos "+contadorPositivos);
	document.write("Cantidad de negativos "+contadorNegativos);
	document.write("Cantidad de ceros "+contadorCeros);
	document.write("Cantidad de números pares "+contadorPares);
	document.write("Promedio de positivos "+promedioPositivos);
	document.write("Promedios de negativos "+promedioNegativos);
	document.write("Diferencia entre positivos y negativos "+diferencia);
}//FIN DE LA FUNCIÓN