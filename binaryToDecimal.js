function binaryToDecimal(binary) {
    var decimalNumber = 0;
    var i = 0;

    while (binary > 0) {
        var result = binary % 10;
        binary = Math.floor(binary / 10);
        decimalNumber += result * 2 ** i;
        i++;
    }

    return decimalNumber;
}

var binary = 101;
var decimalResult = binaryToDecimal(binary);
console.log(`The decimal number of ${binary} is ${decimalResult}`);
