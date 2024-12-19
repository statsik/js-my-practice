//Напиши функцію, яка приймає массив чисел і повертає новий массив,
// що містить лише унікальні числа.
function uniqueNumbers(mas) {
    const newMas = [];
    for (let i = 0; i < mas.length; i++){
        if (!newMas.includes(mas[i])) {
            newMas.push(mas[i]);
        }
    }
    return newMas;
}

console.log(uniqueNumbers([1, 2, 3, 2, 4, 5, 5])); // [1, 3, 4]

console.log(uniqueNumbers([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]

console.log(uniqueNumbers([2, 2, 2, 2, 2])); // []

console.log(uniqueNumbers([7])); // [7]

console.log(uniqueNumbers([100, 200, 300, 100, 400])); // [200, 300, 400]

console.log(uniqueNumbers([])); // []