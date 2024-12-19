//Напиши функцію яка приймає масив та знаходить мінімальний елемент.

function checkMinimum(mas) {
    let result;
    for (let i = 0; i < mas.length; i++){
        if (mas[i] < mas[i - 1]) {
            result = mas[i];
        } else if (mas[i] === mas[i - 1]) {
            result = mas[i];
        }
    }
    return result;
}

console.log(checkMinimum([1, 5, 3, -2, 9])); // -2
console.log(checkMinimum([100, 20, 45, 1])); // 1
console.log(checkMinimum([8, 18, 5, 4]));    // 4
console.log(checkMinimum([7, 7, 7, 7]));      // 7
console.log(checkMinimum([0, -1, -2, -3])); 