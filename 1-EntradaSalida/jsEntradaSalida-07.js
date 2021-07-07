/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var numUno;
    var numDos;
    var resultadoSuma;

    numUno=document.getElementById('txtIdNumeroUno').value;
    numDos=document.getElementById('txtIdNumeroDos').value;

    resultadoSuma= parseInt (numUno) + parseInt (numDos);

	alert("el resultado de la suma es " +resultadoSuma);	
}

function restar()
{var numUno;
    var numDos;
    var resultadoResta;

    numUno=document.getElementById('txtIdNumeroUno').value;
    numDos=document.getElementById('txtIdNumeroDos').value;

    resultadoResta=parseInt (numUno) - parseInt (numDos)

	alert("el resultado de la resta es " +resultadoResta);
	
}

function multiplicar()
{   var numUno;
    var numDos;
    var resultadoMul;

    numUno=document.getElementById('txtIdNumeroUno').value;
    numDos=document.getElementById('txtIdNumeroDos').value;

    resultadoMul= parseInt (numUno) * parseInt (numDos);

	alert("el resultado de la multiplicación es " +resultadoMul);
	
}

function dividir()
{   var numUno;
    var numDos;
    var resultadoDiv;

    numUno=document.getElementById('txtIdNumeroUno').value;
    numDos=document.getElementById('txtIdNumeroDos').value;

    resultadoDiv= parseInt (numUno) / parseInt (numDos);

	alert("el resultado de la división es " +resultadoDiv);
	
}

