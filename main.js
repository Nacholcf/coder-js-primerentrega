let nombreUsuario = prompt("Ingrese su nombre: ");
let apellidoUsuario = prompt("Ingrese su apellido: ");
let edad = Number (prompt("Ingrese su edad"));
const ESMAYOR = (edad >= 18);


if ((ESMAYOR) && (nombreUsuario != "") && (apellidoUsuario != "")) {
    alert("Bienvenido al sitio web: " + " " + nombreUsuario + " " + apellidoUsuario);
    var cantidadProductos = Number(prompt("Ingrese la cantidad de productos que desea comprar"))
    var carrito = 0

    for (var i = 0; i<cantidadProductos; i++) {

        console.log("Valor Producto:"+ " " + i)
    
        var productoA = Number(prompt("ingrese el valor del producto"));
        
        carrito = carrito + productoA
    }
    
    console.log("El total de los productos es:" + " " + carrito)

    saludo(nombreUsuario, apellidoUsuario); 


    } else if (edad < 18 ){
        alert("Debes ser mayor de edad para ingresar al sitio web");
    } else  {
        alert("Completa tus datos")
    }


    function saludo(nombreUsuario, apellidoUsuario){
        console.log("Gracias por realizar tu compra:" + " " + nombreUsuario + " " + apellidoUsuario);
    }



