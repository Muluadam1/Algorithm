/*
Binary Search: Write a function that performs a binary search 
on a sorted array of numbers to find a given target value. 
The function should return the index of the target value if it exists in the array, or -1 if it doesn't.
 */
function binarySearch(arr, target) {
    var left = 0;
    var right = arr.length - 1;

    while (left <= right) {
        var mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid; // Target found, return the index
        } else if (arr[mid] < target) {
            left = mid + 1; // Target is in the right half
        } else {
            right = mid - 1; // Target is in the left half
        }
    }

    return -1; // Target not found
}

function main() {
    var sortedArray = [2, 5, 7, 9, 12, 15, 18, 20];
    var target = 18;
    var result = binarySearch(sortedArray, target);
    console.log(result);
}
main();

//alternative way 
function binarySearch(arr, target, left, right) {
    if (left > right) {
        return -1; // Target not found
    }

    var mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
        return mid; // Target found, return the index
    } else if (arr[mid] < target) {
        return binarySearch(arr, target, mid + 1, right); // Search in the right half
    } else {
        return binarySearch(arr, target, left, mid - 1); // Search in the left half
    }
}

function main() {
    var sortedArray = [2, 5, 7, 9, 12, 15, 18, 20];
    var target = 18;
    var result = binarySearch(sortedArray, target, 0, sortedArray.length - 1);
    console.log(result);
}
main();