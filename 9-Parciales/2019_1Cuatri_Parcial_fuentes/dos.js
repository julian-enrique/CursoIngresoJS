function mostrar()
{   var nombre
	var nombrePareja
	var peso
	var pesoPareja
	var mensaje
    var sumaPesos
    var promedioPesos
   
    nombre=prompt("por favor ingrese su nombre");
    peso=parseInt(prompt("por favor ingrese su peso"));
    nombrePareja=prompt("por favor ingrese el nombre de su pareja");
    pesoPareja=parseInt(prompt("por favor ingrese el peso de su pareja"));
    sumaPesos=(peso+pesoPareja);
    promedioPesos=(sumaPesos/2);

    mensaje="ustedes se llaman "+nombre+" y "+nombrePareja;
    mensaje=mensaje+" y pesan "+peso+" y "+pesoPareja+" kilos respectivamente ";
    mensaje=mensaje+"que sumados ambos pesan "+sumaPesos;
    mensaje=mensaje+" y el promedio de pesos es "+promedioPesos;
   
   

     alert(mensaje)
  
}
