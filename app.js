let oneEuroIs = {
    "JPY": 156.5, // Japan yen
    "USD": 1.07, // US dollar
    "GBP": 0.87, // British pound
};

// Función para convertir de euros a dólares estadounidenses
// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function (valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
// Función para convertir de dólares a yenes japoneses
const fromDollarToYen = function (valueInDollar) {
    let valueInYen = valueInDollar * 156.5;
    return valueInYen;
}

// Función para convertir de yen a pound
const fromYenToPound = function (valueInYen) {
    let valueInPound = valueInYen * 0.87;
    return valueInPound;
}
const sum = function (a, b) {
    return a + b;
}
module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound, sum };