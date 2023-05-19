/**class Producto {
    constructor(id, nombre, precio) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
    }
  }
  
  const productos = [
    new Producto(1, "Aceite puro thc" , "$2500"),
    new Producto(2, "Aceite puro cbd" , "$2500"),
    new Producto(3, "Aceite de thc /cbd" , "$2500"),
  ];
  
  const listaProductos = document.getElementById("productos");

 
  productos.forEach((productos) => {
    let item = document.createElement("option");
    item.value = productos.id.toString();
    item.innerText = productos.nombre;
    listaProductos.append(item);
    
  });
  
  const listaPrecio = document.getElementById("precio");

  function agregarPrecio() {

    
  }
  
*/

  
