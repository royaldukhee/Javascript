var numbers = [];
function smallestAmong(...numbers) {
    var smallest = numbers[0];
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] < smallest) {
            smallest = numbers[i];
        }
    }
    console.log(`The smallest number is ${smallest}`);
}
smallestAmong(12,7,3,2);