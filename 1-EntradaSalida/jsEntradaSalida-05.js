/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{   var nombre;
	var edad;
	nombre=document.getElementById("txtIdNombre").value;
	edad=document.getElementById("txtIdEdad").value;

mensaje="Usted se llama ";
mensaje=mensaje + nombre;
mensaje=mensaje + " y tiene ";
mensaje=mensaje + edad;
mensaje=mensaje + " años. ";

alert(mensaje);
}

