// EL OBJETIVO ES HACER UN CARRITO DE COMPRAS QUE VAYA SUMANDO LOS PRODUCTOS, Y QUE SI LA SUMA ES MAYOR A $7.000 EL PRODUCTO SEA CON ENVIO GRATIS

//inicializamos las variables a utilizar
let sumaPrecios = 0;
let precioEnvio = 800;

//inicializamos la variable que va a contener los precios
let precio;

do {
    precio = prompt('Ingrese el precio del producto. Para finalizar ingrese "0"');
    console.log(precio);
    //Parseamos el precio
    const precioParseado = parseFloat(precio);
    
    sumaPrecios = sumaPrecios + precioParseado;
    console.log(sumaPrecios);
} while (precio != 0);

//SI LA SUMA ES MENOR A $7.000, SE LE SUMAN $800 CORRESPONDIENTES AL VALOR DEL ENVIO
if (sumaPrecios < 7000) {
    sumaPrecios = sumaPrecios + precioEnvio;
}
console.log(sumaPrecios); 
//MUESTRO LOS RESULTADOS
alert('La suma total a pagar es de: ' + sumaPrecios);