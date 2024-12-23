// Напиши функцію, яка приймає об'єкт і змінює значення властивості "address",
// але тільки якщо ця властивість вже існує.
// Якщо її немає, поверни об'єкт без змін.

function updateAddress(object,newAddress) {
    const keys = Object.keys(object);
    for (const key of keys) {
        if (key === "address") {
            object.address = newAddress;
        }
    }
    return object;
}

console.log(updateAddress({ name: "John", address: "Old Street" }, "New Street"));
// Expected: { name: "John", address: "New Street" }

console.log(updateAddress({ name: "Alice", age: 30 }, "Unknown Place"));
// Expected: { name: "Alice", age: 30 } (no change, since address does not exist)

console.log(updateAddress({ address: "California", company: "Google" }, "Silicon Valley"));
// Expected: { address: "Silicon Valley", company: "Google" }

console.log(updateAddress({}, "Somewhere"));
// Expected: {} (no change)