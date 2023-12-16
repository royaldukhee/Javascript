function binaryToDecimal(binary) {
    while(binary>0){
        var decimalNumber = 0;
        var i = 0;
        var result =binary%10;
        console.log(result);
        binary = Math.floor(binary/10);
        decimalNumber = decimalNumber+result*2**i;
        i++;
    }
    return decimalNumber;
}
var Decimal = binaryToDecimal(1111);
console.log(`the decimal number of ${binary} is ${Decimal}`);