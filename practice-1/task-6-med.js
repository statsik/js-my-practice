//Напишіть функці яка приймає масив чисел. Функція повинна занйти мінімальний елемент та видалити його з масиву.
function delMinimum(mas) {
    let result = mas[0];
    for (let i = 0; i < mas.length; i++){
        if (mas[i + 1] < result) {
            result = mas[i + 1];
        }
    }
    mas.splice(mas.indexOf(result), 1);
    return mas;
}

console.log(delMinimum([3, 1, 4, 2, 5])); 
// Відповідь: [3, 4, 2, 5] (мінімальний елемент 1 видалено)

console.log(delMinimum([10, 20, 5, 30, 15])); 
// Відповідь: [10, 20, 30, 15] (мінімальний елемент 5 видалено)

console.log(delMinimum([0, -1, 2, -3, 4])); 
// Відповідь: [0, -1, 2, 4] (мінімальний елемент -3 видалено)

console.log(delMinimum([1])); 
// Відповідь: [] (єдиний елемент 1 видалено)

console.log(delMinimum([])); 
// Відповідь: []