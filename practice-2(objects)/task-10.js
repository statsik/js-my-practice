// Напиши функцію, яка приймає об'єкт та нову властивість "email" (якщо її немає).
// Якщо в об'єкті вже є "email", нічого не роби.
// Поверни оновлений об'єкт.

function addEmail(object,newEmail) {
    keyEmail = Object.keys(object);
    for (const key of keyEmail) {
        if (key === "email") {
            return object;
        } 
    }
    object.email = newEmail;
    return object;
}

console.log(addEmail({ name: "John" }, "john@example.com"));
// Expected: { name: "John", email: "john@example.com" }
console.log(addEmail({ name: "Alice", email: "alice@example.com" }, "new@example.com"));
// Expected: { name: "Alice", email: "alice@example.com" } (unchanged)
console.log(addEmail({}, "noone@example.com"));
// Expected: { email: "noone@example.com" }
console.log(addEmail({ age: 25 }, "user@example.com"));
// Expected: { age: 25, email: "user@example.com" }