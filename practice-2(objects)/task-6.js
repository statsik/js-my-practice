//Напиши функцію, яка приймає об'єкт і повертає true, якщо властивість "address" існує в об'єкті, і false, якщо ні.

function hasAddressProperty(object) {
    if (object.address) {
        return true;
    } else return false;
}

console.log(hasAddressProperty({ name: "John", address: "New York" }));
// Expected: true
console.log(hasAddressProperty({ name: "Alice", age: 30 }));
// Expected: false
console.log(hasAddressProperty({ address: "California", company: "Google" }));
// Expected: true
console.log(hasAddressProperty({ country: "UK" }));
// Expected: false
console.log(hasAddressProperty({}));
// Expected: false