function mostrar()
{   var precio
	var porcentaje
	var precioFinal
	var descuento
	var mensaje

    precio=prompt("ingrese el precio");
	precio=parseInt(precio);
	porcentaje=prompt("ingrese el valor del porcentaje de descuento");
    porcentaje=parseInt(porcentaje);
    descuento=(porcentaje*precio/100);
    precioFinal=(precio-descuento);
    mensaje=("el precio final con descuento es "+precioFinal);
    document.getElementById('elPrecioFinal').value=mensaje;

  

}
