/*A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. 
In other words, a prime number is a number that is only divisible by 1 and itself, with no other divisors.
For example, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, and so on, are all prime numbers because they 
cannot be divided evenly by any other numbers except 1 and themselves.*/

function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

function main() {
    var num = 89;
    var isNumPrime = isPrime(num);
    console.log(isNumPrime);
}
main();