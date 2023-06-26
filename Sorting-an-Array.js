/*Sorting an Array: Implement a sorting algorithm, such as bubble sort, selection sort, 
or insertion sort, to sort an array of numbers in ascending order.*/

function sortArray(arr) {
    var len = arr.length;
    var swapped;

    do {
        swapped = false;
        for (var i = 0; i < len - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}

function main() {
    var numbers = [4, 2, 7, 1, 5];
    var sortedArray = sortArray(numbers);
    console.log(sortedArray);
}
main();

//alternative way 
function sortArray(arr) {
    return arr.sort(function(a, b) {
        return a - b;
    });
}

function main() {
    var numbers = [4, 2, 7, 1, 5];
    var sortedArray = sortArray(numbers);
    console.log(sortedArray);
}
main();