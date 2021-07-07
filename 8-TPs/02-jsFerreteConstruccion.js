/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
var largo
var ancho
var radio
var alambre
var perimetro
var cemento
var cal
var area

function Rectangulo () 
{largo=document.getElementById('txtIdLargo').value;
ancho=document.getElementById('txtIdAncho').value;
perimetro=(parseInt(largo)*2)+(parseInt(ancho)*2);
alambre=(perimetro*3);
alert("usted debera comprar "+alambre+" metros de alambre");

}
function Circulo () 
{radio=document.getElementById('txtIdRadio').value;
perimetro=(2*3.14*radio);
alambre=(perimetro*3)
alert("usted debera comprar "+alambre+" metros de alambre");
	
}
function Materiales () 
{largo=document.getElementById('txtIdLargo').value;
ancho=document.getElementById('txtIdAncho').value;
area=parseInt(largo)*parseInt(ancho);
cemento=(area*2);
cal=(area*3);
	alert("usted debera comprar "+cemento+" bolsas de cemento y "+cal+" bolsas de cal");
}