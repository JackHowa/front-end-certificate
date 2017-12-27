function findElement(arr, func) {
    return arr.filter(func)[0];
}

findElement([1, 2, 3, 4], function (num) {
    return num % 2 === 0;
});

const firstTest = findElement([1, 3, 5, 8, 9, 10], function (num) {
    return num % 2 === 0;
});

console.assert(firstTest === 8, "First test fails not equal to 8");

const secondTest = findElement([1, 3, 5, 9], function (num) {
    return num % 2 === 0;
});

console.assert(secondTest == undefined, "Second test doesn't equal undefined");