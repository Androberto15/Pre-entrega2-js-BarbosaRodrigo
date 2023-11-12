// Objeto para guardar los precios de los productos
let precios = {
  remera: 5000,
  zapatilla: 50000,
  buzo: 25000,
  pantalon: 12000,
};

// Array para guardar los nombres de los productos
let productos = ["remera", "zapatilla", "buzo", "pantalon"];

// Función para validar la entrada del usuario
function validarEntrada(entrada, opciones) {
  if (opciones.includes(entrada.toLowerCase())) {
      return true;
  } else {
      return false;
  }
}

// Función para agregar un producto al carrito
function agregarProducto() {
  let producto = prompt(
      "¿Qué producto querés comprar? (remera, zapatilla, buzo, pantalon)"
  );
  if (validarEntrada(producto, productos)) {
      let cantidad = prompt(`¿Qué cantidad de ${producto} quieres comprar?`);
      if (validarEntrada(cantidad, ["1", "2", "3", "4", "5"])) {
          carrito.push({ producto: producto, cantidad: parseInt(cantidad) });
          alert(`Se agregaron ${cantidad} ${producto} al carrito.`);
          return true;
      } else {
          alert("Ingrese una cantidad válida (1, 2, 3, 4, 5)");
          return true;
      }
  } else {
      alert("Ingrese un producto válido (remera, zapatilla, buzo, pantalon)");
      return true;
  }
}

// Array para guardar los productos del carrito
let carrito = [];

// Función para mostrar el carrito
function mostrarCarrito() {
  if (carrito.length > 0) {
      console.log("Carrito:");
      carrito.forEach((item, index) => {
          console.log(
              `${index + 1}. ${item.producto} - Cantidad: ${
                  item.cantidad
              } - Precio: $${precios[item.producto] * item.cantidad}`
          );
      });
  } else {
      console.log("El carrito está vacío");
  }
}

// Función para calcular el total a pagar
function calcularTotal() {
  let total = carrito.reduce(
      (acumulador, item) => acumulador + precios[item.producto] * item.cantidad,
      0
  );
  console.log(`Total a pagar: $${total}`);

  // Variable para guardar el texto
let texto = "";

// Recorro el carrito y agrego la información de cada producto al texto
carrito.forEach((item) => {
  texto += `Producto: ${item.producto} - Cantidad: ${item.cantidad} - Precio: $${precios[item.producto] * item.cantidad}\n`;
});

// Agrego el total al texto
texto += `Total a pagar: $${total}`;
// Muestro el texto del total de productos y cantidades en el alerta
alert(texto);

  // Mostrar el total con un alert
  //alert(`Total a pagar: $${total}`);
  // Alerta con detalles de la compra
  carrito.forEach((item) => {
      alert(`Producto: ${item.producto}, Cantidad: ${item.cantidad}, Precio: $${precios[item.producto] * item.cantidad}`);
  });
}

// Función principal
function main() {
  let seguir = true;
  while (seguir) {
      seguir = agregarProducto();
      let otro = prompt("¿Querés comprar otro producto? (si/no)");
      if (validarEntrada(otro, ["si", "no"])) {
          if (otro == "no") {
              seguir = false;
          }
      } else {
          alert("Ingrese una respuesta válida (si/no)");
      }
  }
  mostrarCarrito();
  calcularTotal();
}

// Ejecución de la función principal
main();
