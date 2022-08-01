function ingresarNombre() {
    alert("Bienvenidos a Coco Maderas Cordoba");
    let nombre = prompt("Ingrese su nombre:");
    while (nombre === "" || nombre === null || nombre === " ") {
      nombre = prompt("¡Dede ingresar su nombre para continuar!");
    }
  }

function verProductos() {
    let producto;
    do {
      producto = prompt("Hola!! ¿Que producto le interesa? Indique su numero: \n1)Especiero \n2)Perchero \n3)Tabla individual \n4)Tabla de Corte \n5)Huevera \n6)Maceta");
    } while (producto != 1 && producto != 2 && producto != 3 && producto != 4 && producto != 5 && producto != 6);
  
    switch (producto) {
      case "1":
        alert ("Producto seleccionado: Especiero  $1500");
        return "Especiero"
      case "2":
        alert ("Producto seleccionado: Perchero  $3000");
        return "Perchero"
      case "3":
        alert ("Producto seleccionado: Tabla Individual  $700");
        return "Tabla Individual"
      case "4":
        alert ("Producto seleccionado: Tabla de Corte  $1800");
        return "Tabla de Corte"
      case "5":
        alert ("Producto seleccionado: Huevera  $900");
        return "Huevera"
      case "6":
        alert ("Producto seleccionado: Maceta  $1000");
        return "Maceta"
    }
}

function validarPrecio(producto) {
    if (producto === "Especiero") {
      return 1500;
    } else if (producto === "Perchero") {
      return 3000;
    } else if (producto === "Tabla Individual") {
      return 700;
    } else if (producto === "Tabla de Corte") {
      return 1800;
    } else if (producto === "Huevera") {
      return 900;
    } else {
      return 1000;
    }
  }

function cobrar (precioProd) {

  let pagoCliente = prompt("¿con cuanto abona?")
  
   if (pagoCliente >= precioProducto) {
    alert ("Su vuelto es $" + (pagoCliente - precioProd));

   } else {
    alert ("No tiene suficiente dinero para comprar el producto seleccionado");
   }
   }

ingresarNombre();
let prod = verProductos();
let precioProducto = validarPrecio(prod);
cobrar (precioProducto);
seguirCompra (verProductos);