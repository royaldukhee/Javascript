function decimalToBinary(decimalNumber){
    const binaryNumber = [];
    while(decimalNumber > 0){
        result = decimalNumber % 2;
        decimalNumber = Math.floor(decimalNumber / 2);
        binaryNumber.push(result);
    }
    return binaryNumber.reverse();
}
var binaryNumber = decimalToBinary(10);
console.log(...binaryNumber);