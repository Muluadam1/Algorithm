/*
 The factorial of a non-negative integer n, denoted as n!, 
 is the product of all positive integers from 1 to n. In other words,
it is the result of multiplying n by all the positive integers less than n down to 1.*/
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1; // Factorial of 0 and 1 is always 1
    } else {
        var result = 1;

        for (var i = 2; i <= n; i++) {
            result *= i;
        }

        return result;
    }
}

// Example usage
var number = 8;
var factorialResult = factorial(number);
console.log(factorialResult);


// alternative way
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1; // Factorial of 0 and 1 is always 1
    } else {
        return n * factorial(n - 1);
    }
}

function main() {
    var number = 8;
    var factorialResult = factorial(number);
    console.log(factorialResult);
}
main();