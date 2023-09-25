let continuar = true;

const menu = "1. Agendar\n2. Servicios\n3. Ver Carrito\nPresiona Escape para salir";
const horarios = "1. Mañana\n2. Tarde\n3. Noche";
const profesionales = "1. amparo\n2. marcos\n3. roxana\n4. pamela";
const servicios = "1. alisado\n2. cortes & peinados\n3. pestañas & cejas\n4. manos & pies\n5. depilacion";

let scheduleSelect = null;
let staffSelect = null;
let servicesSelect = null;
let servicesCost = null;

let invoice = null;

function validateOption(userInput, maxOption) {

    // Verificar si el valor ingresado es un número válido
    if (isNaN(userInput)) {
        alert("Entrada no válida. Por favor, ingresa solo números.");
        continuar = false;
        return false;
    } else if (userInput >= 1 && userInput <= maxOption) {
        console.log("¡Número válido! Has ingresado:", userInput);
        return true;
    } else {
        alert("Opción no válida. Por favor, selecciona una opción válida entre 1 y " + maxOption);
        console.log("Número no válido. Por favor, ingresa un número entre 1 y " + maxOption);
        continuar = false;
        return false;
    }
}

function scheduleMenu() {
    while (continuar) {
        // Mostrar un prompt con opciones de menú
        const userInput = prompt(horarios);

        // Verificar si el usuario presionó Escape o canceló el prompt
        if (userInput === null) {
            console.log("Has salido del menú.");
            continuar = false; // Cambiar la variable para salir del bucle
            continue; // Pasar a la siguiente iteración del bucle
        } else if (!validateOption(userInput, 3)) {
            console.log("Opcion no valida.");
            continuar = false;
            continue; // Pasar a la siguiente iteración del bucle
        }
        //"1. Mañana\n2. Tarde\n3. Noche";
        switch (userInput) {
            case "1":
                scheduleSelect = "Mañana";
                alert("agenda - " + scheduleSelect);
                break;
            case "2":
                scheduleSelect = "Tarde";
                alert("agenda - " + scheduleSelect);
                break;
            case "3":
                scheduleSelect = "Noche";
                alert("agenda - " + scheduleSelect);
                break;
            default:
                alert("Opción no válida. Por favor, selecciona una opción válida.");
        }
        return scheduleSelect
    }
}

function staffMenu() {
    while (continuar) {
        // Mostrar un prompt con opciones de menú
        const userInput = prompt(profesionales);

        // Verificar si el usuario presionó Escape o canceló el prompt
        if (userInput === null) {
            console.log("Has salido del menú.");
            continuar = false; // Cambiar la variable para salir del bucle
            continue; // Pasar a la siguiente iteración del bucle
        } else if (!validateOption(userInput, 4)) {
            console.log("Opcion no valida.");
            continuar = false;
            continue; // Pasar a la siguiente iteración del bucle
        }
        //"1. amparo\n2. marcos\n3. roxana\n4. pamela";
        switch (userInput) {
            case "1":
                staffSelect = "amparo";
                alert("profesional - " + staffSelect);
                break;
            case "2":
                staffSelect = "marcos";
                alert("profesional - " + staffSelect);
                break;
            case "3":
                staffSelect = "roxana";
                alert("profesional - " + staffSelect);
                break;
            case "4":
                staffSelect = "pamela";
                alert("profesional - " + staffSelect);
                break;
            default:
                alert("Opción no válida. Por favor, selecciona una opción válida.");
        }
        return staffSelect
    }
}

function servicesMenu() {
    while (continuar) {
        // Mostrar un prompt con opciones de menú
        const userInput = prompt(servicios);

        // Verificar si el usuario presionó Escape o canceló el prompt
        if (userInput === null) {
            console.log("Has salido del menú.");
            continuar = false; // Cambiar la variable para salir del bucle
            continue; // Pasar a la siguiente iteración del bucle
        } else if (!validateOption(userInput, 5)) {
            console.log("Opcion no valida.");
            continuar = false;
            continue; // Pasar a la siguiente iteración del bucle
        }

        //"1. alisado\n2. cortes & peinados\n3. pestañas & cejas\n4. manos & pies\n5. depilacion";
        switch (userInput) {
            case "1":
                servicesSelect = "alisado";
                servicesCost = 64900;
                invoice += servicesCost;
                alert("sevicios - " + servicesSelect + " - " + servicesCost);
                break;
            case "2":
                servicesSelect = "cortes & peinados";
                servicesCost = 15000;
                invoice += servicesCost;
                alert("sevicios - " + servicesSelect + " - " + servicesCost);
                break;
            case "3":
                servicesSelect = "pestañas & cejas";
                servicesCost = 13900;
                invoice += servicesCost;
                alert("sevicios - " + servicesSelect + " - " + servicesCost);
                break;
            case "4":
                servicesSelect = "manos & pies";
                servicesCost = 10000;
                invoice += servicesCost;
                alert("sevicios - " + servicesSelect + " - " + servicesCost);
                break;
            case "5":
                servicesSelect = "depilacion";
                servicesCost = 6900;
                invoice += servicesCost;
                alert("sevicios - " + servicesSelect + " - " + servicesCost);
                break;
            default:
                alert("Opción no válida. Por favor, selecciona una opción válida.");
        }
        return servicesSelect
    }
}

function shoppingCart() {

    const evaluateValue = (value) => value === null ? "no seleccionado!" : value;

    scheduleSelect = evaluateValue(scheduleSelect);
    staffSelect = evaluateValue(staffSelect);
    servicesSelect = evaluateValue(servicesSelect);
    invoice = evaluateValue(invoice);

    alert("Usted a seleccionado: \n profesional: " + staffSelect + "\n horario: " + scheduleSelect + "\n valor: " + invoice)
}

while (continuar) {
    // Mostrar un prompt con opciones de menú
    const userInput = prompt(menu);

    // Verificar si el usuario presionó Escape o canceló el prompt
    if (userInput === null) {
        console.log("Has salido del menú.");
        continuar = false; // Cambiar la variable para salir del bucle
        continue; // Pasar a la siguiente iteración del bucle
    } else if (!validateOption(userInput, 3)) {
        console.log("Opcion no valida.");
        continuar = false;
        continue; // Pasar a la siguiente iteración del bucle
    }

    // Ejecutar acciones basadas en la opción seleccionada por el usuario
    switch (userInput) {
        case "1":
            const scheduleInput = scheduleMenu();
            const staffInput = staffMenu();
            break;
        case "2":
            const servInput = servicesMenu();
            break;
        case "3":
            const cartSummary = shoppingCart();
            break;
        default:
            alert("Opción no válida. Por favor, selecciona una opción válida.");
    }
}


alert('Gracias por Preferirnos');