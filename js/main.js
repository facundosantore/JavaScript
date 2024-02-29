//ALGORITMO CON UN CONDICIONAL

///*
// let montoTotal = parseInt(prompt("Ingrese el monto total de la compra:"));

// if (montoTotal >= 1000) {
//     let descuento = montoTotal * 0.10;
//     let montoTotalConDescuento = montoTotal - descuento;
//     console.log(`Se aplicó un descuento del 10%. El monto total con descuento es: ${montoTotalConDescuento}`);
// } else {
//     console.log(`No se aplicó ningún descuento. El monto total es: ${montoTotal}`);
// }
//*/

//ALGORITMO UTILIZANDO UN CICLO


let montoTotal = 0;
let continuar = true;

while (continuar) {
  let producto = prompt("Ingrese el nombre del producto (o 'fin' para finalizar la compra):");
  if (producto.toLowerCase() === "fin") {
    continuar = false;
  } else {
    let precio = parseFloat(prompt(`Ingrese el precio de ${producto}:`));
    montoTotal += precio;
  }
}

if (montoTotal > 1000) {
  let descuento = montoTotal * 0.10;
  let montoTotalConDescuento = montoTotal - descuento;
  console.log(`Monto total: $${montoTotal}`);
  console.log(`Se aplicó un descuento del 10%. El monto total con descuento es: $${montoTotalConDescuento}`);
} else {
  console.log(`Monto total: $${montoTotal}`);
  console.log("No se aplicó ningún descuento.");
}
