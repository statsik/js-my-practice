//Напиши функцію, яка приймає два масиви і
// повертає об'єднаний массив без дублювання елементів.

function mergeArrays(mas1, mas2) {
    const newArrayMas1 = [];
    const newArrayMas2 = [];
    for (let i = 0; i < mas1.length; i++) {
        if (!newArrayMas1.includes(mas1[i])) {
            newArrayMas1.push(mas1[i]);
        }
    }
    for (i = 0; i < mas2.length; i++){
        if (!newArrayMas2.includes(mas2[i])) {
            newArrayMas2.push(mas2[i]);
        }
    }
    const newArray = newArrayMas1.concat(newArrayMas2);
    const result = [];
    for (let j = 0; j < newArray.length; j++){
        if (!result.includes(newArray[j])) {
            result.push(newArray[j]);
        }
    }
    return result;
}

console.log(mergeArrays([1, 2, 3], [3, 4, 5])); // [1, 2, 3, 4, 5]

console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]

console.log(mergeArrays([1, 1, 1], [1, 1, 1])); // [1]

console.log(mergeArrays([1, 'a', 3.5], [2, 'b', 3.5])); // [1, 'a', 3.5, 2, 'b']

console.log(mergeArrays([], [])); // []

console.log(mergeArrays([1, 2, 3], [])); // [1, 2, 3]

console.log(mergeArrays([1, 2, 3], ['1', '2', '3'])); // [1, 2, 3, '1', '2', '3']

console.log(mergeArrays([1000000, 2000000], [2000000, 3000000])); // [1000000, 2000000, 3000000]

console.log(mergeArrays([-1, 0, 1], [1, 2, 3])); // [-1, 0, 1, 2, 3]