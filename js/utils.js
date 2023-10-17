export const formatCurrency = value => value.toLocaleString('es-CL', {
    style: 'currency',
    currency: 'CLP'
});

export const properName = string => 
    (!string || typeof string !== 'string') 
    ? '' 
    : string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

