/*Alumno: Ybañez Julian Enrique
  Enunciado: InstruccionIf ejercicio 3

*/
function mostrar()
{ var edad;
	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);
	
	if(edad>=18){
    alert("usted es mayor de edad");//condicion verdadera
}
    else{//sino
    alert("sos menor de edad");//condicion falsa
}
}