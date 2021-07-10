/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;
	var mensaje;
	nombre=prompt("Introduzca su nombre");
	mensaje="usted se llama: " + nombre;
	document.getElementById("txtIdNombre").value=mensaje;

}

