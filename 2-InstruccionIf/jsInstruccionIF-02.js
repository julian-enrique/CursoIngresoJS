/*Alumno: Ybañez Julian Enrique
  Enunciado: InstruccionIf ejercicio 2

*/
function mostrar()
{ var edad;
	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);
	if(edad>=18){
    alert("usted es mayor de edad");
}
    if(edad<18){
    alert("acceso denegado");
}
}