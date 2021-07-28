function mostrar()
{	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=prompt("Ingrese el primer numero");
	numeroDos=prompt("Ingrese el segundo numero");

	if(numeroUno==numeroDos){
		resultado=numeroUno+numeroDos;
	}else{
		numeroUno=parseInt(numeroUno);
	    numeroDos=parseInt(numeroDos);
	}
	if(numeroUno>numeroDos){
		resultado=numeroUno-numeroDos;
	}else{
		resultado=numeroUno+numeroDos;
	}
	if(numeroUno-numeroDos>10){
		alert("la resta es "+resultado+" y superó el 10");
	}else{
		alert(resultado);
	}

    
}
