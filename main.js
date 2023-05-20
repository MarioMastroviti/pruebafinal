//PRODUCTOS
const productos = [
    {
        id: "01",
        titulo: "Aceite de thc",
        imagen:  "../img/aceite1.jpg",
        precio: 3000
    },
    {
        id: "02",
        titulo: "Aceite de cbd",
        imagen:  "../img/aceite2.png",
        precio: 3000
    },
    {
        id: "03",
        titulo: "Aceite de thc/cbd",
        imagen:  "../img/aceite3.png",
        precio: 3000
    },
    {
        id: "04",
        titulo: "Aceite para mascotas",
        imagen:  "../img/aceite4.jpg",
        precio: 3000
    }
];

const todosProductos = document.getElementById("todos-los-productos");
let  botonAgregar = document.querySelectorAll(".producto-agregar");


function cargarProductos(){

    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalle">
        <h3 class="producto-titulo">${producto.titulo}</h3>
        <p class="producto-precio">$${producto.precio}</p>
        <button class= "producto-agregar" id ="${producto.id}" >AGREGAR AL CARRITO</button>
        </div>
        `;
        todosProductos.append(div);
    })
    }
   
cargarProductos();


botonAgregar = document.querySelectorAll(".producto-agregar");


botonAgregar.forEach(boton => {
    boton.addEventListener("click" , agregarAlCarrito);
});

let productosEnCarrito;
const productosEnCarritoLS = JSON.parse(localStorage.getItem("productos-en-el-carrito"));
if(productosEnCarritoLS){
productosEnCarrito = productosEnCarritoLS;
}else{
productosEnCarrito = [];
};


function agregarAlCarrito(e){
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);
    if(productosEnCarrito.some(producto => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex(producto => producto.id ===idBoton);
        productosEnCarrito[index].cantidad++;
    }else{
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    window.localStorage.setItem("productos-en-el-carrito", JSON.stringify(productosEnCarrito));

   
}


