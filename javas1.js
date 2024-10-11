function toconvertCelsiustoFahrenheit(c){
    var F = (9*c + (32 * 5)) / 5
    return F;
}
function toconvertFahrenheittoCelsius(F){
    var C = (5 * (F - 32)) / 9;
    return C;
}
console.log(toconvertCelsiustoFahrenheit(60));
console.log(toconvertFahrenheittoCelsius(45));
