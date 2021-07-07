/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{   var numeroUno;
	var numeroDos;

	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;

	resultadoSuma=parseInt (numeroUno) + parseInt (numeroDos);

	alert("la suma es " +resultadoSuma);
}

