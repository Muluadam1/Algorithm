function countVowels(str) {
    var count = 0;
    var vowels = ['a', 'e', 'i', 'o', 'u'];

    for (var i = 0; i < str.length; i++) {
        var char = str[i].toLowerCase();
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

function main() {
    var string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    var vowelCount = countVowels(string);
    console.log(vowelCount);
}
main();