/*en Invierno: bariloche tiene un aumento del 20% 
               cataratas y Cordoba tiene un descuento del 10% 
               Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% 
           cataratas y Cordoba tiene un aumento del 10% 
           Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% 
                      cataratas tiene un aumento del 10% 
                      Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/



function mostrar()
{
	var estacion;
	var destino;
	var precioBase;
	var descuento;
	var aumento;
	var precioFinal;
	var mensaje;

	estacion=document.getElementById('txtIdEstacion').value;
	destino=document.getElementById('txtIdDestino').value;
	precioBase=15000;
	descuento=0;
	aumento=0;



	switch(estacion){
	    case "Invierno":
		 if(destino=="Bariloche"){
		 	aumento=20;
		 }else{
		 	if(destino=="Mar del plata"){
		 		descuento=20;
		 	}else{
		 		descuento=10;
		 	}
		 }
		 break;
		case "Verano":
		if(destino=="Bariloche"){
		 	descuento=20;
		 }else{
		 	if(destino=="Mar del plata"){
		 		aumento=20;
		 	}else{
		 		aumento=10;
		 	}
		 }
		 break;
		 case "Otoño":
		 case "Primavera":
		    if(destino=="Cordoba"){
		 	precioFinal=precioBase;
		    }else{
		 	aumento=10;
		 }
		 break;
}
	if(aumento!=0){
		precioFinal=precioBase+(aumento*precioBase/100);
	}else{
		if(descuento!=0){
			precioFinal=precioBase-(descuento*precioBase/100);
		}
	}
    alert("El precio final es de $"+precioFinal);






}//FIN DE LA FUNCIÓN