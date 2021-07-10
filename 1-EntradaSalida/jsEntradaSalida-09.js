/*
Ejercicio 9 bis.*/
function mostrarAumento()
{   var sueldo
	var porcentajeSoli
	var resultado 

    sueldo=document.getElementById('txtIdSueldo').value;
    porcentajeSoli= prompt("ingrese el porcentaje al cual desea incrementar su sueldo");
    resultado=parseFloat (sueldo) 
    resultado=resultado + parseFloat (porcentajeSoli * sueldo/100);
    document.getElementById('txtIdResultado').value = resultado;
    
}
