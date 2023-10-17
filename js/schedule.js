const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

export function hours() {
    let horasLaborales = [];
    let horaInicio = 10; // 10 a.m.
    let horaFin = horaInicio + 8; // 6 p.m.

    let option = 1;
    for (let i = horaInicio; i < horaFin; i++) {
        horasLaborales.push({ option: option.toString(), time: i + ":00" });
        option++;
        horasLaborales.push({ option: option.toString(), time: i + ":30" });
        option++;
    }

    return horasLaborales;
}

export function days() {
    const listaDias = daysWithoutFormat();
    return listaDias.map(d => `${d.option}. ${d.day} ${d.date}`).join('\n');
}

export function getDayByOption(option) {
    const allDays = daysWithoutFormat(); 
    return allDays.find(day => day.option === option);
}

export function getHourByOption(option) {
    const allHours = hours();
    return allHours.find(hour => hour.option === option);
}

// Esta función es interna y solo la usamos dentro de este módulo
// Sirve para obtener el arreglo de días sin el formato de string
export function daysWithoutFormat() {
    const hoy = new Date(); // Toma la fecha actual del sistema
    let listaDias = [];

    for (let i = 0; i < 7; i++) {
        let diaActual = new Date(hoy);
        diaActual.setDate(hoy.getDate() + i);

        let nombreDia = dias[diaActual.getDay()];
        let diaCerrado = (nombreDia === "Domingo" || nombreDia === "Lunes");

        let diaFormateado = {
            option: (i + 1).toString(),
            day: nombreDia,
            closed: diaCerrado,
            date: `${diaActual.getDate().toString().padStart(2, '0')}/${(diaActual.getMonth() + 1).toString().padStart(2, '0')}/${diaActual.getFullYear()}`
        };

        listaDias.push(diaFormateado);
    }

    return listaDias;
}
