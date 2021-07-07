/*10 bis*/
function mostrarAumento()
{
	var sueldo
	var resultado 

    sueldo=document.getElementById('txtIdImporte').value;
    porcentajeSoli= prompt("ingrese el porcentaje al cual desea disminuir su sueldo");
    resultado=parseInt (sueldo) - parseInt (porcentajeSoli * sueldo / 100); 
    document.getElementById('txtIdResultado').value = resultado;
    
}
