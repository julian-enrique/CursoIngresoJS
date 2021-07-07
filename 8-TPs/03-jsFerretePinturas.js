/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
var temperatura
var far
var cen
function FahrenheitCentigrados () 
{
	temperatura=document.getElementById('txtIdTemperatura').value;
    far=parseInt(temperatura);
    cen=(far-32);
    alert(far+" grados Fahrenheit son "+cen+" grados centigrados")
}

function CentigradosFahrenheit () 
{
	temperatura=document.getElementById('txtIdTemperatura').value;
    cen=parseInt(temperatura);
    far=(cen+32);
    alert(cen+" grados centigrados son "+far+" grados Fahrenheit")
}
