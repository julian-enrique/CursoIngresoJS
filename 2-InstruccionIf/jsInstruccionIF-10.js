/*Alumno: Ybañez Julian Enrique
  Enunciado: InstruccionIf ejercicio 10

*/
function mostrar()
{
	var resultado

	resultado=Math.random();
	resultado=resultado*10;
	resultado=parseInt(resultado);
	resultado=resultado+1;
if(resultado>=9){
	alert(resultado+" excelente");
}
else if(resultado>4){
	alert(resultado+" aprobó");
}
else{
	alert(resultado+" la próxima");
}


}//FIN DE LA FUNCIÓN