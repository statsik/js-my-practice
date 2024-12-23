// Напиши функцію, яка приймає масив з ключами і
// значеннями(наприклад, [["name", "John"], ["age", 25], ["address", "123 Street"]]) і
// створює об'єкт з цих пар. Поверни об'єкт.

function arrayToObject(array) {
    const newObject = {};
    for (let i = 0; i < array.length; i++){
        const objectArray = [key, value] = array[i];
        newObject[key] = value;
    }
    return newObject;
}

console.log(arrayToObject([["name", "John"], ["age", 25], ["address", "123 Street"]]));
// Expected: { name: "John", age: 25, address: "123 Street" }
console.log(arrayToObject([["title", "Developer"], ["company", "Google"]]));
// Expected: { title: "Developer", company: "Google" }
console.log(arrayToObject([]));
// Expected: {}
console.log(arrayToObject([["a", 1], ["b", 2], ["c", 3]]));
// Expected: { a: 1, b: 2, c: 3 }