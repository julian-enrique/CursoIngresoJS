/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{	var numero;
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var bandera;

	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';
	bandera=0;

	while(respuesta=="si"){
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);

		if(numero>-1){
        	sumaPositivos=sumaPositivos+numero;
        }else{
        	bandera=1;
        	multiplicacionNegativos=multiplicacionNegativos*numero;
        }
        
        contador=contador+1;

        

        respuesta=prompt("Desea continuar?");
   }
   	if(bandera==0){
   		multiplicacionNegativos=0;
   	}

	document.getElementById('txtIdSuma').value=sumaPositivos;
	document.getElementById("txtIdProducto").value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN