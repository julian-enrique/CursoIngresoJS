/*Alumno: Ybañez Julian
 Enunciado: Switch ej 1*/

function mostrar()
{
	//tomo el mes
	var mes;

	mes=document.getElementById('txtIdMes').value;


	switch(mes){
		case "Enero":
		   alert("que comiences bien el año!!!");
		   break;
		case "Marzo":
		   alert("a clases");
		   break;
		case "Julio":
		   alert("se vienen las vacaciones");
		   break;
		case "Diciembre":
		   alert("felices fiestas");
		   break;
	}



}//FIN DE LA FUNCIÓN