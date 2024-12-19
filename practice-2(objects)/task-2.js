//Напиши функцію, яка приймає об'єкт і додає до нього нову властивість "address" (рядок).
//Поверни оновлений об'єкт.
function addAddress(info,locations) {
    info.address = locations;
    return info;
}

console.log(addAddress({ name: "John", age: 25 }, "New York"));
// Expected: { name: "John", age: 25, address: "New York" }
console.log(addAddress({ title: "Developer", company: "Google" }, "California"));
// Expected: { title: "Developer", company: "Google", address: "California" }
console.log(addAddress({}, "Somewhere"));
// Expected: { address: "Somewhere" }
console.log(addAddress({ country: "UK" }, "London"));
// Expected: { country: "UK", address: "London" }
console.log(addAddress({ name: "Alice", hobby: "reading" }, "123 Maple Street"));
// Expected: { name: "Alice", hobby: "reading", address: "123 Maple Street" }