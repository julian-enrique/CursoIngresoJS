/*Alumno: Ybañez Julian
  Enunciado: parcial 2019 TP5
  DIV J*/


function mostrar()
{ 	var destino;
	var formaDePago;
	var dias;
	var descuento;
	var precio;
	var precioBruto;


	destino=document.getElementById("Marca").value;
	dias=prompt("Ingrese la cantidad de dias: ");
	dias=parseInt(dias);
	formaDePago=prompt("Ingrese una forma de pago: Efectivo, Debito, Mercado Pago");
	
	precio=100;
	descuento=0;

	switch(destino){
		case "América":
		  descuento=50;
		  switch(formaDePago){
		  	case "debito":
		  	descuento=60;
		  	break;
        }
		break;

		case "África":
		  descuento=60;
		  switch(formaDePago){
		  	case "mercado pago":
		  	case "efectivo":
		  	descuento=75;
		  	break;
		  }
		break;

		case "Europa":
		  descuento=20;
		  switch(formaDePago){
		  	case "debito":
		  	descuento=35;
		  	break;
		  	case "mercado pago":
		  	descuento=30;
		  	break;
		  	case "efectivo":
		  	descuento=25;
		  	break;
		  }
		break;

		default:
		  descuento=-20
		break;
	} 

	  precioBruto=precio*dias;
	  descuento=descuento*precioBruto/100;
	  precioFinal=precioBruto-descuento;
      alert("El precio final es de $"+precioFinal);



}
