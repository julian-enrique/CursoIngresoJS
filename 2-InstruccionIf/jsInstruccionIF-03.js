function mostrar()
{ var edad;
	edad=parseInt(document.getElementById('txtIdEdad').value);
	if(edad>=18){
    alert("usted es mayor de edad");//condicion verdadera
}
    else{//sino
    alert("sos menor de edad");//condicion falsa
}
}