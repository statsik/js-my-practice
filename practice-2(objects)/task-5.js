// Напиши функцію, яка приймає об'єкт і повертає значення властивості "name".

function getNameValue(object) {
    return object.name;
}

console.log(getNameValue({ name: "John", age: 25 }));
// Expected: "John"
console.log(getNameValue({ name: "Alice", hobby: "reading" }));
// Expected: "Alice"
console.log(getNameValue({ age: 30 }));
// Expected: undefined (since "name" does not exist)
console.log(getNameValue({ name: "Bob", country: "UK" }));
// Expected: "Bob"
console.log(getNameValue({}));
// Expected: undefined