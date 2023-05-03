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


    alert("Estos productos llevan IVA, El total es: " + carrito*1.21);
    console.log("El total de los productos con IVA es:" + carrito*1.21);


    let aceptar = prompt("Responda SI/NO para confirmar su compra");

    if (aceptar == "SI"){
        alert("Gracias por realizar tu compra:" + " " + nombreUsuario + " " + apellidoUsuario)
        saludo(nombreUsuario, apellidoUsuario); 
    } else {
        alert("Gracias por tu tiempo, te esperamos para tu proxima compra");
    }
    

    function saludo(nombreUsuario, apellidoUsuario){
        console.log("Gracias por realizar tu compra:" + " " + nombreUsuario + " " + apellidoUsuario);
    }
    

    //ARRAYS 
    const productos = [
        {
            nombre: "Buzo",
            precio: 12000
        },
        {
            nombre: "Remera",
            precio: 8000
        },
        {
            nombre: "Pantalon",
            precio: 12000
        },
        {
            nombre: "Campera",
            precio: 16000
        },
    ];

    let oferta = prompt("Si queres ver nuestros productos en oferta responda SI/NO")
   
    if (oferta == "SI"){
        alert("Estos son nuestros productos:" + " " + "Buzo" + "," + " " + "Remera" + "," + " " + "Pantalon"+ "," + " " + "Campera")
        let productoElegido = prompt("Ingrese el producto que desea: ");
        console.log(productos.find ((productos) => productos.nombre === productoElegido)); 

        if ((productoElegido == "Buzo") || (productoElegido == "Remera") || (productoElegido == "Pantalon") || (productoElegido == "Campera")){
    
        let final = prompt("Elegiste: " + " " + productoElegido + "," + " " + "Si desea llevarlo responda SI/NO: ");

        if (final == "SI" ){
         alert("El producto se agregara a su carrito")
        } else {
            alert("Gracias por tu tiempo, te esperamos para tu proxima compra");
        }

    } else{
    alert("El producto no existe");
    alert("Gracias por tu tiempo, te esperamos para tu proxima compra");
   }} else {
        alert("Gracias por tu tiempo, te esperamos para tu proxima compra");
    }
    
} else if (edad < 18 ){
    alert("Debes ser mayor de edad para ingresar al sitio web");
} else  {
    alert("Completa tus datos")
}



const sale = ["Buzo", "Remera", "Pantalon", "Campera",];

sale.push("Zapatillas");

console.log(sale);
