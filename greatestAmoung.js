var numbers = [];
function greatestAmoung(...numbers) {
    var greatest = numbers[0];
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > greatest) {
            greatest = numbers[i];
        }
    }
    console.log(`The greatest number is ${greatest}`);
}
greatestAmoung(2,7,10);