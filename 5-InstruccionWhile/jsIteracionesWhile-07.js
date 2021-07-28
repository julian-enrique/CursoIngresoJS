/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var numero;
	var respuesta;
	var promedio;

	contador=0;
	acumulador=0;
	respuesta='si';

	while(respuesta=="si"){
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);

		acumulador=acumulador+numero;
		contador=contador+1;
		respuesta=prompt("¿Desea continuar ingresando numeros? \ si \ no" );
    }

    promedio=acumulador/contador;

    document.getElementById('txtIdSuma').value=acumulador;
    document.getElementById("txtIdPromedio").value=promedio;


}//FIN DE LA FUNCIÓN