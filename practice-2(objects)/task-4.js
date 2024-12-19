// Напиши функцію, яка приймає об'єкт і видаляє з нього властивість "age".
// Поверни оновлений об'єкт.

function removeAgeProperty(object) {
    delete object.age;
    return object;
}

console.log(removeAgeProperty({ name: "John", age: 25 })); 
// Expected: { name: "John" }
console.log(removeAgeProperty({ name: "Alice", age: 40, hobby: "reading" })); 
// Expected: { name: "Alice", hobby: "reading" }
console.log(removeAgeProperty({ age: 10 })); 
// Expected: {}
console.log(removeAgeProperty({ name: "Bob", country: "UK" })); 
// Expected: { name: "Bob", country: "UK" } (no change if age does not exist)
console.log(removeAgeProperty({})); 
// Expected: {} (no change)