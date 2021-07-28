/*Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.*/


function mostrar()
{
	var contadorDeVueltas;
	var numero;
	var suma;
	var promedio;

    contadorDeVueltas=0;
    numero=0;
    suma=0;

	while(contadorDeVueltas<5)
	{
		numero=prompt("ingrese un numero");
		numero=parseInt(numero);
		contadorDeVueltas=contadorDeVueltas+1;
		suma=suma+numero;

	}

	promedio=suma/5;
	document.getElementById('txtIdSuma').value="la suma es "+suma;
	document.getElementById('txtIdPromedio').value="el promedio es "+promedio;


}//FIN DE LA FUNCIÓN