function bienvenida() {
    alert("Bienvenid@ a la tienda de Brutal Skateboard");
}

let tablaSkate = 50;
let trucks = 30;
let ruedas = 20;
let rodamientos = 10;
let tornillos = 5;

bienvenida()

let menu;

while (true) {
    menu = parseInt(prompt("Por favor, seleccione una opción:\n1. Ver Catálogo de Productos\n2. Realizar Compra\n3. Salir"));

    if (menu === 1) {
        alert("Catálogo de Productos:\n1. Tabla de skate $50\n2. Trucks $30\n3. Ruedas $20\n4. Rodamientos $10\n5. Tornillos $5");
    } else if (menu === 2) {
        alert("Excelente, te ayudaremos con tu compra.");
        // Llamar a la función para comprar
        productos();
    } else if (menu === 3) {
        alert("Gracias por visitar Brutal Skateboard. ¡Hasta luego!");
        break; // Salir del bucle
    } else {
        alert("Opción no válida. Por favor, seleccione una opción válida.");
    }
}

// Función para calcular el total de la compra
function calcularTotal(cantidadTabla, cantidadTrucks, cantidadRuedas, cantidadRodamientos, cantidadTornillos) {
    let total = (cantidadTabla * tablaSkate) + (cantidadTrucks * trucks) + (cantidadRuedas * ruedas) + (cantidadRodamientos * rodamientos) + (cantidadTornillos * tornillos);
    return total;
}

// Función productos
function productos() {
    let cantidadTabla = parseInt(prompt("¿Cuántas tablas de skate deseas comprar?"));
    let cantidadTrucks = parseInt(prompt("¿Cuántos trucks deseas comprar?"));
    let cantidadRuedas = parseInt(prompt("¿Cuántas ruedas deseas comprar?"));
    let cantidadRodamientos = parseInt(prompt("¿Cuántos rodamientos deseas comprar?"));
    let cantidadTornillos = parseInt(prompt("¿Cuántos tornillos deseas comprar?"));

    // Calcular el total
    let totalCompra = calcularTotal(cantidadTabla, cantidadTrucks, cantidadRuedas, cantidadRodamientos, cantidadTornillos);

    // Mostrar el total
    alert("El total de tu compra es: $" + totalCompra);
}

