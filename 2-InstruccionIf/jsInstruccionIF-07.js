/*Alumno: Ybañez Julian Enrique
  Enunciado: InstruccionIf ejercicio 7

*/
function mostrar()
{var edad
 var estadoCivil;
	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);
	estadoCivil=document.getElementById('estadoCivil').value;

if(edad<18&&estadoCivil!="Soltero"){
	alert("usted es muy pequeño para no ser soltero")
}
	


}//FIN DE LA FUNCIÓN