//Напиши функцію, яка приймає массив чисел і повертає новий массив,
// де кожен елемент є сумою усіх попередніх елементів

function cumulativeSum(mas) {
    const newMas = [];
    let sum = 0;
    for (let i = 0; i < mas.length; i++){
        sum += mas[i];
        newMas.push(sum);
    }
    return newMas;
}

console.log(cumulativeSum([1, 2, 3, 4])); // [1, 3, 6, 10]
console.log(cumulativeSum([5, 10, 15]));  // [5, 15, 30]
console.log(cumulativeSum([0, -1, 2, -3])); // [0, -1, 1, -2]