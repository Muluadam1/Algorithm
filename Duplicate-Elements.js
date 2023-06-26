function findDuplicateElements(arr) {
    var duplicates = [];
    var visited = {};

    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];

        if (visited[element]) {
            if (!duplicates.includes(element)) {
                duplicates.push(element);
            }
        } else {
            visited[element] = true;
        }
    }

    return duplicates;
}

function main() {
    var numbers = [1, 2, 3, 4, 5, 6, 5, 7, 1];
    var duplicates = findDuplicateElements(numbers);
    console.log(duplicates);
}
main();