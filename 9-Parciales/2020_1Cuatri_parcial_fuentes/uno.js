/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:

1 el tipo (validar "barbijo" , "jabón" o "alcohol") ,
2 el precio (validar entre 100 y 300),
3 la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
4 la Marca y 
5 el fabricante.

Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/

function mostrar()
{   var tipoDeProducto;
	var precio;
	var cantidadUnidades;
	var marca;
	var fabricante;
	var contadorVueltas;
	var precioMinimo;
	var precioMaximo;
	var bandera;

	precioMinimo=0;
	precioMaximo=0;
	bandera=0;
	contadorVueltas=0;

    //pedir productos y validarlos
	while(contadorVueltas<2){
		tipoDeProducto=prompt("Ingrese un producto. Alcohol Barbijo Jabon");
		while(tipoDeProducto!="alcohol"&&tipoDeProducto!="barbijo"&&tipoDeProducto!="jabon"){
		    tipoDeProducto=prompt("Error. Ingrese un producto valido. Alcohol Barbijo Jabon");
		}
		precio=prompt("Ingrese precio entre $100 y $300");
		precio=parseInt(precio);
		while(precio<100||precio>300){
			precio=prompt("Error. Ingrese dato entre $100 y $300");
			precio=parseInt(precio);
		}
		cantidadUnidades=prompt("Ingrese la cantidad de unidades. Min 1 Max 1000 u");
		cantidadUnidades=parseInt(cantidadUnidades);
		while(cantidadUnidades<1||cantidadUnidades>1000){
			cantidadUnidades=prompt("Error. Ingrese una cantidad valida. Min 1 Max 1000 u");
			cantidadUnidades=parseInt(cantidadUnidades);
		}
		marca=prompt("Ingrese Marca del producto");
		fabricante=prompt("Ingrese el fabricante");
			
		
			
     contadorVueltas=contadorVueltas+1;

		
	}     

   alert("El alcohol mas barato es de la marca "+marca);
   alert("La cantidad de unidades es "+cantidadUnidades);
   alert("El fabricante es "+fabricante);



 }