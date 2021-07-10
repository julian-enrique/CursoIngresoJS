function mostrar()
{ var edad;
	edad=parseInt(document.getElementById('txtIdEdad').value);
	if(edad>=18){
    alert("usted es mayor de edad");
}
    if(edad<18){
    alert("acceso denegado");
}
}