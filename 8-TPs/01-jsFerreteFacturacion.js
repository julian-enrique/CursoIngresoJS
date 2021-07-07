/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
var precioUno
var precioDos
var precioTres
var suma
var promedio
var precioFinal

function Sumar () 
{ precioUno=document.getElementById('txtIdPrecioUno').value;
 precioDos=document.getElementById('txtIdPrecioDos').value;
 precioTres=document.getElementById('txtIdPrecioTres').value;
 suma=parseInt(precioUno)+parseInt(precioDos)+parseInt(precioTres);
 alert("el resultado de la suma es "+suma)
	
}
function Promedio () 
{ precioUno=document.getElementById('txtIdPrecioUno').value;
 precioDos=document.getElementById('txtIdPrecioDos').value;
 precioTres=document.getElementById('txtIdPrecioTres').value;
 suma=parseInt(precioUno)+parseInt(precioDos)+parseInt(precioTres);
 promedio=suma/3;
 alert("el promedio es "+promedio)
	
}
function PrecioFinal () 
{precioUno=document.getElementById('txtIdPrecioUno').value;
 precioDos=document.getElementById('txtIdPrecioDos').value;
 precioTres=document.getElementById('txtIdPrecioTres').value;
 suma=parseInt(precioUno)+parseInt(precioDos)+parseInt(precioTres);
 precioFinal=suma+(suma*0.21);
 alert("el precio final es "+precioFinal+" con iva incluido");
	
}