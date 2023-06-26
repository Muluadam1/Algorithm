function sumArrayElements(arr) {
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

function main() {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var sum = sumArrayElements(numbers);
    console.log(sum);
}
main();