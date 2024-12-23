// Напиши функцію, яка приймає об'єкт та нові значення для імені та віку.
// Функція повинна змінити обидві властивості в об'єкті.
// Поверни оновлений об'єкт.

function updatePerson(object,newName,newAge) {
    object.name = newName;
    object.age = newAge;
    return object;
}

console.log(updatePerson({ name: "John", age: 25 }, "Alice", 30));
// Expected: { name: "Alice", age: 30 }
console.log(updatePerson({ name: "Bob", age: 40, address: "Paris" }, "Charlie", 50));
// Expected: { name: "Charlie", age: 50, address: "Paris" }
console.log(updatePerson({ age: 20 }, "David", 35));
// Expected: { age: 35, name: "David" }
console.log(updatePerson({}, "Eve", 22));
// Expected: { name: "Eve", age: 22 }