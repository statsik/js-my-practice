// Напиши функцію, яка приймає об'єкт і новий вік.
// Функція повинна змінити значення властивості "age" в об'єкті на нове значення.
// Поверни оновлений об'єкт.

function updateAge(object,newAge) {
    object.age = newAge;
    return object;
}

console.log(updateAge({ name: "John", age: 25 }, 30));
// Expected: { name: "John", age: 30 }
console.log(updateAge({ name: "Alice", age: 40, hobby: "reading" }, 45));
// Expected: { name: "Alice", age: 45, hobby: "reading" }
console.log(updateAge({ age: 10 }, 18));
// Expected: { age: 18 }
console.log(updateAge({ name: "Bob", age: 22, country: "UK" }, 23));
// Expected: { name: "Bob", age: 23, country: "UK" }
console.log(updateAge({}, 50));
// Expected: { age: 50 }