import { properName } from './utils.js'
export const staff = [
    {
        option: "1",
        name: "amparo",
        lastname: "González",
        age: 25,
        sex: 'F'
    },
    {
        option: "2",
        name: "marcos",
        lastname: "Rodríguez",
        age: 28,
        sex: 'M'
    },
    {
        option: "3",
        name: "roxana",
        lastname: "Pérez",
        age: 35,
        sex: 'F'
    },
    {
        option: "4",
        name: "pamela",
        lastname: "Martínez",
        age: 31,
        sex: 'F'
    }
];

const getTitle = (sex) => sex === 'F' ? 'Sra.' : 'Sr.';

export const menu = `Por favor, selecciona Profesional:
${staff[0].option}. ${getTitle(staff[0].sex)} ${properName(staff[0].name)} ${properName(staff[0].lastname)}
${staff[1].option}. ${getTitle(staff[1].sex)} ${properName(staff[1].name)} ${properName(staff[1].lastname)}
${staff[2].option}. ${getTitle(staff[2].sex)} ${properName(staff[2].name)} ${properName(staff[2].lastname)}
${staff[3].option}. ${getTitle(staff[3].sex)} ${properName(staff[3].name)} ${properName(staff[3].lastname)}`;

export function getStaffByOption(optionValue) {
    return staff.find(staff => staff.option === optionValue);
}