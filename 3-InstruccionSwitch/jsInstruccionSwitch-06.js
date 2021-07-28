function mostrar()
{
	//tomo la hora
	var hora;

	hora=document.getElementById('txtIdHora').value;
	hora=parseInt(hora);

	if(hora>6&&hora<12){
		alert("es de mañana");
    }
    else{
    	if(hora>12&&hora<20){
    		alert("es de tarde");
    	}
    }
    if(hora>-1&&hora<7){
    	alert("es de noche");
    }
    else{
    	if(hora>19&&hora<25){
    	alert("es de noche");	
    }else{
    	alert("Hora invalida");
    }
}























}

/*	switch(hora){
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
		  alert("Es de mañana");
		  break;
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
		  alert("es de tarde");
		  break;
		case 0:
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 20:
		case 21:
		case 22:
		case 23:
		case 24:
		  alert("es de noche");
		  break;
		default:
		  alert("la hora no existe");
		  break;*/
