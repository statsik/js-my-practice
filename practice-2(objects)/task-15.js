// Напиши функцію, яка приймає масив об'єктів і змінює в кожному з них властивість "age",
// збільшуючи її на 1. Поверни оновлений масив об'єктів.

function incrementAges(array) {
    for (let i = 0; i < array.length; i++){
        if (array[i].hasOwnProperty("age")) {
            array[i].age += 1;
        }   
    }
    return array;
}

console.log(incrementAges([{ name: "John", age: 25 }, { name: "Alice", age: 30 }]));
// Expected: [{ name: "John", age: 26 }, { name: "Alice", age: 31 }]
console.log(incrementAges([{ age: 10 }, { age: 0 }, { name: "Bob" }]));
// Expected: [{ age: 11 }, { age: 1 }, { name: "Bob" } (no change for Bob since no age)]
console.log(incrementAges([]));
// Expected: []
console.log(incrementAges([{ name: "Charlie", age: 40, city: "London" }]));
// Expected: [{ name: "Charlie", age: 41, city: "London" }]