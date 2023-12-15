var number=prompt("Enter the number",0);
var power= prompt("Enter the power",0);
function nPower(number, power) {
    return number ** power;

}
var result =nPower(number, power);
document.write(`the power raised to ${power} of ${number} is ${result}`);