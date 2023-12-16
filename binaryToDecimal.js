function binaryToDecimal(binary) {
    let binaryarray = binary.split('').reverse();
  let decimal = 0;
   for (let i = 0; i < binaryarray.length; i++) {
    decimal = decimal+ parseInt(binaryarray[i]) * 2 ** i;
  return decimal;
}
}
var decimalResult = binaryToDecimal('1010');
console.log(`the decimal number of 1010 is ${decimalResult}`);
