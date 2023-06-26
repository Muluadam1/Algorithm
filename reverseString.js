function reverseString(str) {
    var reversedString = '';

    // Iterate over each character in the string from the last to the first
    for (var i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }

    return reversedString;
}

function main() {
    var originalString = "123456789";
    var reversedString = reverseString(originalString);
    console.log(reversedString);
}
main();

//Alternative way

function reverseString(str) {
    // Split the string into an array of characters
    var charArray = str.split('');

    // Reverse the array
    var reversedArray = charArray.reverse();

    // Join the array back into a string
    var reversedString = reversedArray.join('');

    // Return the reversed string
    return reversedString;
}

function main() {
    var originalString = "123456789";
    var reversedString = reverseString(originalString);
    console.log(reversedString);
}
main();