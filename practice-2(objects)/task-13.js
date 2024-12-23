// Напиши функцію, яка приймає об'єкт користувача з властивостями name та сity.
// Та повертає рядок "User {імя користувача} from {місто користувача}!"

function userInfo(object) {
    return `"User ${object.name} from ${object.city}!"`
}

console.log(userInfo({ name: "John", city: "New York" }));
// Expected: "User John from New York!"
console.log(userInfo({ name: "Alice", city: "London" }));
// Expected: "User Alice from London!"
console.log(userInfo({ name: "Bob", city: "Paris" }));
// Expected: "User Bob from Paris!"