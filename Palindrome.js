/*
A palindrome is a word, phrase, number, or other sequence of characters that reads 
the same forward and backward, disregarding spaces, punctuation, and capitalization. 
In other words, a palindrome remains unchanged when its characters are reversed.
 */
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    var cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Get the length of the cleaned string
    var length = cleanStr.length;

    // Iterate over half of the characters in the cleaned string
    for (var i = 0; i < length / 2; i++) {
        // Compare characters from the beginning and the end
        if (cleanStr[i] !== cleanStr[length - 1 - i]) {
            return false; // Characters don't match, not a palindrome
        }
    }

    return true; // All characters match, it's a palindrome
}

function main() {
    var testString = "madam";
    var isPalindromeResult = isPalindrome(testString);
    console.log(isPalindromeResult);
}
main();

//alternative way 
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    var cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Reverse the string
    var reversedStr = cleanStr.split('').reverse().join('');

    // Check if the reversed string is equal to the original clean string
    return cleanStr === reversedStr;
}

function main() {
    var testString = "level";
    var isPalindromeResult = isPalindrome(testString);
    console.log(isPalindromeResult);
}
main();