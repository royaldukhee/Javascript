var number= prompt("Enter the number",0);
function checkEvenodd(number){
    if(number%2==0){
        document.write(`the number ${number} is even`);
    }
    else{
        document.write(`the number ${number} is odd`);
    }
}
checkEvenodd(number);