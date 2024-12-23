// Напиши функцію, яка створює об'єкт з трьома властивостями: ім'ям, віком і адресою.
// Якщо ім'я та вік не передані, встанови їх значення за замовчуванням ("Unknown", 0 відповідно).
// Поверни об'єкт.

function createPerson(name = "Unknown",age = 0,address) {
    object = {
        name: name,
        age: age,
        address: address,
    }
    return object;
}

console.log(createPerson("John", 25, "New York"));
// Expected: { name: "John", age: 25, address: "New York" }
console.log(createPerson("Alice", 30, "California"));
// Expected: { name: "Alice", age: 30, address: "California" }
console.log(createPerson(undefined, undefined, "London"));
// Expected: { name: "Unknown", age: 0, address: "London" }
console.log(createPerson());
// Expected: { name: "Unknown", age: 0, address: undefined }
console.log(createPerson("Bob", undefined, "Paris"));
// Expected: { name: "Bob", age: 0, address: "Paris" }