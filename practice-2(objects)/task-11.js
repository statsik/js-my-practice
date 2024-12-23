// Напиши функцію, яка приймає об'єкт і змінює тип значення властивості "age" з числа на рядок.
// Поверни оновлений об'єкт.

function convertAgeToString(object) {
    const keys = Object.keys(object);
    for (const key of keys) {
        if (key === "age") {
            object.age = String(object.age);
        }
    }
    return object;
}

console.log(convertAgeToString({ name: "John", age: 25 }));
// Expected: { name: "John", age: "25" }
console.log(convertAgeToString({ name: "Alice", age: "30" }));
// Expected: { name: "Alice", age: "30" } (no change since age is already a string)
console.log(convertAgeToString({ name: "Bob" }));
// Expected: { name: "Bob" } (no age property, so no change)
console.log(convertAgeToString({ age: 0 }));
// Expected: { age: "0" }
console.log(convertAgeToString({ age: 100, country: "UK" }));
// Expected: { age: "100", country: "UK" }