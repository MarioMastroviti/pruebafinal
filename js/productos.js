let productos = [];

fetch("../js/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductos(productos);
    })

const todosProductos = document.getElementById("todos-los-productos");
let  botonAgregar = document.querySelectorAll(".producto-agregar");


function cargarProductos(productosElegidos){

    productosElegidos.forEach(producto => {
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
    actualizarBotonAgregar();
    }
   


    function actualizarBotonAgregar() {
        botonAgregar = document.querySelectorAll(".producto-agregar");
    
        botonAgregar.forEach(boton => {
            boton.addEventListener("click", agregarAlCarrito);
        });
    }


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


