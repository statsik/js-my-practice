//Напиши функцію яка приймає масив та знаходить максимальний елемент.

function maxElement(mas) {
    let result = mas[0];
    for(let i = 0; i < mas.length; i++){
        if (mas[i] > result) {
            result = mas[i];
        } 
    }
    return result;
}

console.log(maxElement([1, 5, 3, -2, 9])); // 9
console.log(maxElement([100, 20, 45, 1])); // 100
console.log(maxElement([8, 18, 5, 4]));    // 18
console.log(maxElement([7, 7, 7, 7]));      // 7
console.log(maxElement([0, -1, -2, -3]));  // 0