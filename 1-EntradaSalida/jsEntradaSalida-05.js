/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
<<<<<<< HEAD
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
=======
{	var nombre;
	var edad;
	var mensaje;

	nombre=document.getElementById('txtIdNombre').value;
	edad=document.getElementById('txtIdEdad').value;
    
    mensaje=("su nombre es " + nombre + " y tiene " + edad + " años");
   

	alert(mensaje)
>>>>>>> 2366345fd370b036d72cb3dc52bb38d6bfc21d4f
}

