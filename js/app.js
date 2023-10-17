import * as Menu from "./menu.js";
import * as Services from "./services.js";
import * as Staff from "./staff.js";
import * as Schedule from "./schedule.js"
import { formatCurrency } from './utils.js';

let continuar = true;

function mostrarMenu(menus) {
    return prompt(menus);
}

function validateOption(selected, optionObjects) {
    if (selected === null) {
        alert("¡Adiós! Gracias por Preferirnos.");
        continuar = false;  // Nos aseguramos que el bucle principal siga corriendo.
        return false;  // Esto hace que el bucle del submenú termine.
    }

    const optionList = optionObjects.map(op => op.option.toString());

    if (!optionList.includes(selected)) {
        alert("Opción no válida");
        return false;
    }
    return true;
}


let option;
do {
    option = mostrarMenu(Menu.menu);

    if (option === null) {
        alert("¡Adiós! Gracias por Preferirnos.");
        continuar = false;
        break;
    }

    // Validar opción del menú principal
    while (!validateOption(option, Menu.opcionesMenu)) {
        option = mostrarMenu(Menu.menu);
    }

    switch (option) {
        case '1':
            console.log('Agendar')

            let selectedDay;
            do {
                let dayOption;
                do {
                    dayOption = mostrarMenu("Selecciona un día:\n" + Schedule.days());
                } while (!validateOption(dayOption, Schedule.daysWithoutFormat()) && continuar);

                selectedDay = Schedule.getDayByOption(dayOption);

                if (selectedDay.closed) {
                    alert(`El ${selectedDay.day} está cerrado. Por favor, selecciona otro día.`);
                }

            } while (selectedDay.closed && continuar);

            alert(`Has seleccionado el día: ${selectedDay.day}, ${selectedDay.date}`);

            // Submenú para seleccionar la hora
            let hourOption;
            const availableHours = Schedule.hours();
            const formattedHours = availableHours.map(h => `${h.option}. ${h.time}`).join('\n');
            do {
                hourOption = mostrarMenu("Selecciona una hora:\n" + formattedHours);
            } while (!validateOption(hourOption, availableHours) && continuar);

            const selectedHour = Schedule.getHourByOption(hourOption);
            alert(`Has seleccionado la hora: ${selectedHour.time}`);
            break;
        case '2':
            console.log('Servicios')
            let serviceOption;
            do {
                serviceOption = mostrarMenu(Services.menu);
            } while (!validateOption(serviceOption, Services.services) && continuar);
            const selectedService = Services.getServiceByOption(serviceOption);
            alert(`Has seleccionado el servicio:\n${selectedService.name} valor: ${formatCurrency(selectedService.value)}`);
            break;
        case '3':
            console.log('Carrito')
            break;
        case '4':
            console.log('Profesional')
            let staffOption;
            do {
                staffOption = mostrarMenu(Staff.menu);
            } while (!validateOption(staffOption, Staff.staff) && continuar);
            const selectedStaff = Staff.getStaffByOption(staffOption);
            alert(`Has seleccionado el profesional:\n${selectedStaff.name} ${selectedStaff.lastname}`);
            break;
        case '5':
            console.log('Salir')
            continuar = false;
            break;
        default:
            console.log('Opcion no Valida');
            alert("Opción no válida");
            break;
    }

} while (continuar);
