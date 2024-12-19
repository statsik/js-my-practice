//Напиши функцію яка приймає масив та повертає масив лише з тих елементів які більші за власний індекс.

function getIndexOfElement(mas) {
    const newMas = [];
    for (let i = 0; i < mas.length; i++){
        if (mas[i] > i) {
            newMas.push(mas[i]);
        }
    }
    return newMas;
}


console.log(getIndexOfElement([1, 2, 3, 4, 5]));  
// Ответ: [1, 2, 3, 4, 5] (все элементы больше своего индекса)

console.log(getIndexOfElement([0, 1, 2, 3, 4]));  
// Ответ: [1, 2, 3, 4] (элементы на 1, 2, 3 и 4 позициях больше индекса)

console.log(getIndexOfElement([-1, 0, 2, 4, 6]));  
// Ответ: [4, 6] (элементы на 3 и 4 позициях больше индекса)

console.log(getIndexOfElement([10, 0, 0, 0, 5]));  
// Ответ: [10, 5] (элементы на 0 и 4 позициях больше индекса)

console.log(getIndexOfElement([0, 0, 0, 0, 0]));  
// Ответ: [] (нет элементов, которые больше индекса)