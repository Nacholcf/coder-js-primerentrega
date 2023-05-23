// let nombreUsuario = prompt("Ingrese su nombre: ");
// let apellidoUsuario = prompt("Ingrese su apellido: ");
// let edad = Number (prompt("Ingrese su edad"));
// const ESMAYOR = (edad >= 18);


// if ((ESMAYOR) && (nombreUsuario != "") && (apellidoUsuario != "")) {
//     alert("Bienvenido al sitio web: " + " " + nombreUsuario + " " + apellidoUsuario);
//     var cantidadProductos = Number(prompt("Ingrese la cantidad de productos que desea comprar"))
//     var carrito = 0


//     for (var i = 0; i<cantidadProductos; i++) {

//         console.log("Valor Producto:"+ " " + i)
    
//         var productoA = Number(prompt("ingrese el valor del producto"));
        
//         carrito = carrito + productoA
//     }

//     console.log("El total de los productos es:" + " " + carrito)


//     alert("Estos productos llevan IVA, El total es: " + carrito*1.21);
//     console.log("El total de los productos con IVA es: " + carrito*1.21);


//     let aceptar = prompt("Responda SI/NO para confirmar su compra");

//     if (aceptar == "SI"){
//         alert("Gracias por realizar tu compra:" + " " + nombreUsuario + " " + apellidoUsuario)
//         saludo(nombreUsuario, apellidoUsuario); 
//     } else {
//         alert("Gracias por tu tiempo, te esperamos para tu proxima compra");
//     }
    

//     function saludo(nombreUsuario, apellidoUsuario){
//         console.log("Gracias por realizar tu compra:" + " " + nombreUsuario + " " + apellidoUsuario);
//     }
    

    
    //ARRAYS 
    const contenido = document.getElementById("contenido"); 
    const verCarrito = document.getElementById("verCarrito"); 
    const modalCarrito = document.getElementById("modalCarrito");

    const productos = [
        { 
            id: 1,
            nombre: "Buzo Gris",
            precio: 12000,
            img: "https://hillsideclothes.000webhostapp.com/img/buzogris.jpg"
        },
        {
            id: 2,
            nombre: "Remera Naranja",
            precio: 8000,
            img: "https://hillsideclothes.000webhostapp.com/img/remera-naranja.jpg"
        },
        {
            id: 3,
            nombre: "Buzo Crema",
            precio: 12000,
            img: "https://hillsideclothes.000webhostapp.com/img/buzocrema.jpg"
        },
        {
            id: 4,
            nombre: "Remera Gris",
            precio: 16000,
            img: "https://hillsideclothes.000webhostapp.com/img/remera-gris.jpg"
        },
    ];

//     let oferta = prompt("Si queres ver nuestros productos en oferta responda SI/NO")
   
//     if (oferta == "SI"){
//         alert("Estos son nuestros productos:" + " " + "Buzo" + "," + " " + "Remera" + "," + " " + "Pantalon"+ "," + " " + "Campera")
//         let productoElegido = prompt("Ingrese el producto que desea: ");
//         console.log(productos.find ((productos) => productos.nombre === productoElegido)); 

//         if ((productoElegido == "Buzo") || (productoElegido == "Remera") || (productoElegido == "Pantalon") || (productoElegido == "Campera")){
    
//         let final = prompt("Elegiste: " + " " + productoElegido + "," + " " + "Si desea llevarlo responda SI/NO: ");

//         if (final == "SI" ){
//          alert("El producto se agregara a su carrito")
//         } else {
//             alert("Gracias por tu tiempo, te esperamos para tu proxima compra");
//         }

//     } else{
//     alert("El producto no existe");
//     alert("Gracias por tu tiempo, te esperamos para tu proxima compra");
//    }} else {
//         alert("Gracias por tu tiempo, te esperamos para tu proxima compra");
//     }
    
// } else if (edad < 18 ){
//     alert("Debes ser mayor de edad para ingresar al sitio web");
// } else  {
//     alert("Completa tus datos")
// }



// const sale = ["Buzo Gris", "Remera Naranja", "Buzo Crema", "Remera Gris",];

// sale.push("Zapatillas");

// console.log(sale);


let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "eldiv"
    content.innerHTML = ` 
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p class="precio">${product.precio} $</p>
    `;

    contenido.append(content);

    let comprar = document.createElement("button")
    comprar.innerText = "Anadir al Carrito";
    comprar.className = "comprar";

    content.append(comprar);

    comprar.addEventListener("click", () =>{
        carrito.push({
            id : product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
        });
        console.log(carrito);
        guardarEnLocal();
    });
});

verCarrito.addEventListener("click", () => {
    modalCarrito.innerHTML = "";
    modalCarrito.style.display = "flex"; 
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">Carrito.</h1>
    `;
    modalCarrito.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "X";
    modalbutton.className = "modal-header-button"; 

    modalbutton.addEventListener("click", () => {
        modalCarrito.style.display = "none";
    }); 

    modalHeader.append(modalbutton); 

    carrito.forEach((product) => { 
        let carritocontenido = document.createElement("div"); 
        carritocontenido.className = "modal-content"; 
        carritocontenido.innerHTML = `
          <img src="${product.img}">
          <h3>${product.nombre}</h3>
          <p>${product.precio}</p>
        `;

        modalCarrito.append(carritocontenido);

        let eliminar = document.createElement("borrar");
        eliminar.innerText = " X ";
        eliminar.className = "eliminar-producto";
        carritocontenido.append(eliminar);

        eliminar.addEventListener("click", borrarProducto);
    });



    const total = carrito.reduce((acc, el) => acc + el.precio, 0); 

    const totalCompra = document.createElement("div")
    totalCompra.className = "total-content"
    totalCompra.innerHTML =  `Total a pagar: ${total} $`;
    modalCarrito.append(totalCompra);
});



const elcarrito = () => { 
modalCarrito.innerHTML = "";
modalCarrito.style.display = "flex"; 
const modalHeader = document.createElement("div");
modalHeader.className = "modal-header"
modalHeader.innerHTML = `
<h1 class="modal-header-title">Carrito.</h1>
`;
modalCarrito.append(modalHeader);

const modalbutton = document.createElement("h1");
modalbutton.innerText = "X";
modalbutton.className = "modal-header-button"; 

modalbutton.addEventListener("click", () => {
    modalCarrito.style.display = "none";
}); 

modalHeader.append(modalbutton); 

carrito.forEach((product) => { 
    let carritocontenido = document.createElement("div"); 
    carritocontenido.className = "modal-content"; 
    carritocontenido.innerHTML = `
      <img src="${product.img}">
      <h3>${product.nombre}</h3>
      <p>${product.precio}</p>
    `;

    modalCarrito.append(carritocontenido);

    let eliminar = document.createElement("borrar");
    eliminar.innerText = " X ";
    eliminar.className = "eliminar-producto";
    carritocontenido.append(eliminar);

    eliminar.addEventListener("click", borrarProducto);
}); 



const total = carrito.reduce((acc, el) => acc + el.precio, 0); 

const totalCompra = document.createElement("div")
totalCompra.className = "total-content"
totalCompra.innerHTML =  `Total a pagar: ${total} $`;
modalCarrito.append(totalCompra);
};

const borrarProducto = () => {
    const buscarId = carrito.find((element) => element.id);

    carrito = carrito.filter((carrito1) => { 
        return carrito1 !== buscarId;   
    });

    guardarEnLocal();
    elcarrito();
};


const guardarEnLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
    };

