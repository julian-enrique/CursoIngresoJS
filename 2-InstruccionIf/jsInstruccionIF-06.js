/*Alumno: Ybañez Julian Enrique
  Enunciado: InstruccionIf ejercicio 6

*/
function mostrar()
{var edad

	edad=document.getElementById('txtIdEdad').value; 
	edad=parseInt(edad);

if(edad>17){
  alert("es mayor");
}else{
	if(edad>12){
  alert("es adolescente");
	}else{
		alert("es niño");
	}
}

}//FIN DE LA FUNCIÓN