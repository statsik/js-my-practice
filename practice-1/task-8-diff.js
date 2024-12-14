//Напиши функцію, яка приймає массив чисел і повертає новий масив,
// де всі парні числа переміщені в початок, а всі непарні - в кінець.

function rearrangeNumbers(mas) {
    const pairedMassive = [];
    const unpairedMassive = [];
    for (let i = 0; i < mas.length; i++){
        if (mas[i] % 2 === 0) {
            pairedMassive.push(mas[i]);
        } else if (mas[i] % 2 === 1) {
            unpairedMassive.push(mas[i]);
        }
    }
    const result = pairedMassive.concat(unpairedMassive);
    return result;
}


console.log(rearrangeNumbers([1, 2, 3, 4, 5, 6]));  // [2, 4, 6, 1, 3, 5]
console.log(rearrangeNumbers([10, 21, 30, 41, 50])); // [10, 30, 50, 21, 41]
console.log(rearrangeNumbers([7, 8, 9, 10]));        // [8, 10, 7, 9]
console.log(rearrangeNumbers([2, 4, 6, 8]));          // [2, 4, 6, 8]
console.log(rearrangeNumbers([1, 3, 5, 7]));          // [1, 3, 5, 7]