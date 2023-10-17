
import { formatCurrency } from './utils.js'
export const services = [
    {
        option: "1",
        name: "alisado",
        value: 64900,
        time: 120
    },
    {
        option: "2",
        name: "cortes & peinados",
        value: 15000,
        time: 20
    },
    {
        option: "3",
        name: "pestañas & cejas",
        value: 13900,
        time: 30
    },
    {
        option: "4",
        name: "manos & pies",
        value: 10000,
        time: 15
    },
    {
        option: "5",
        name: "depilacion",
        value: 64900,
        time: 120
    },
]

export const menu = `Por favor, selecciona Servicio:
${services[0].option}. ${services[0].name} - ${formatCurrency(services[0].value)}
${services[1].option}. ${services[1].name} - ${formatCurrency(services[1].value)}
${services[2].option}. ${services[2].name} - ${formatCurrency(services[2].value)}
${services[3].option}. ${services[3].name} - ${formatCurrency(services[3].value)}
${services[4].option}. ${services[4].name} - ${formatCurrency(services[4].value)}`;

export function getServiceByOption(optionValue) {
    return services.find(service => service.option === optionValue);
}
