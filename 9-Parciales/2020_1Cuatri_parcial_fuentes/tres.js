/*En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil
("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/



function mostrar()
{   var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var temperatura;
	var continuar;
	var contadorViudos;
	var temperaturaMax;
	var bandera;
	var personaMasTemperatura;
	var contadorSolteros;
	var contadorHombres;
	var contadorTerceraEdad;
	var acumuladorEdadSoltero;
	var numeroDePasajero;

	temperatura=0;
	temperaturaMax=0;
	bandera=0;
	continuar="si";
	contadorViudos=0;
	contadorSolteros=0;
	contadorTerceraEdad=0;
	acumuladorEdadSoltero=0;
	numeroDePasajero=0;

	while(continuar=="si"){
		numeroDePasajero=numeroDePasajero+1;
		nombre=prompt("Ingrese nombre del pasajero numero "+numeroDePasajero);
		edad=prompt("Ingrese edad del pasajero");
		edad=parseInt(edad);
		while(edad<0){
			edad=prompt("Valor incorrecto. La edad no puede ser negativa. Intente nuevamente.");
		    edad=parseInt(edad);
		}
		sexo=prompt("Ingrese sexo del pasajero: f para femenino: m para masculino");
		while(sexo!="f"&&sexo!="m"){
			sexo=prompt("Opcion incorrecta. f para femenino: m para masculino");
		}
		estadoCivil=prompt("Ingrese estado civil del pasajero: soltero casado viudo");
		while(estadoCivil!="soltero"&&estadoCivil!="casado"&&estadoCivil!="viudo"){
			estadoCivil=prompt("Opcion incorrecta. Ingrese: soltero casado viudo");
		}
		temperatura=prompt("Ingrese temperatura corporal del pasajero");
		temperatura=parseInt(temperatura);
		while(temperatura<33){
			temperatura=prompt("Error. Ingresar temperatura valida");
			temperatura=parseInt(temperatura);
		}
		if(bandera=0){
				temperaturaMax=temperatura;
				bandera=1;
			}
		    if(temperatura>temperaturaMax){ //a) El nombre de la persona con mas temperatura.
				temperaturaMax=temperatura;
				personaMasTemperatura=nombre;
			}

		switch(estadoCivil){
			case "viudo":
			if(edad>17){ //b) Cuantos mayores de edad estan viudos
				contadorViudos=contadorViudos+1;
			}else{
				contadorViudos=contadorViudos+1;
			}
			break;
			case "soltero":
			if(sexo=="m"){ //La cantidad de hombres que hay solteros o viudos.
				contadorSolteros=contadorSolteros+1;
				acumuladorEdadSoltero=acumuladorEdadSoltero+edad;
			}
			break;
		}
		if(edad>60&&temperatura>38){ // d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
			contadorTerceraEdad=contadorTerceraEdad+1;
		}    
	    

		continuar=prompt("¿Desea ingresar mas pasajeros?")
	}

		promedio=acumuladorEdadSoltero/contadorSolteros;

		alert("La persona con mas temperatura es "+personaMasTemperatura+" y tiene "+temperaturaMax+" grados Celsius");
		alert("Cantidad de personas mayores de edad y que son viudos: "+contadorViudos);
		alert("Hombres solteros: "+contadorSolteros+" Hombres viudos: "+contadorViudos);
        alert("Cantidad de personas de la tercera edad con mas de 38 grados: "+contadorTerceraEdad);
        alert("Promedio de edad de hombres solteros: "+promedio);

	
}
