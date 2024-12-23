// Напиши функцію, яка приймає два об'єкти і об'єднує їх в один.
// Якщо у об'єктів є однакові властивості, значення другого об'єкта мають замінити значення першого.
// Поверни результат.

function mergeObjects(ob1, ob2) {
    return Object.assign({}, ob1, ob2);
}

console.log(mergeObjects({ name: "John", age: 25 }, { age: 30, address: "New York" }));
// Expected: { name: "John", age: 30, address: "New York" }
console.log(mergeObjects({ title: "Developer" }, { company: "Google" }));
// Expected: { title: "Developer", company: "Google" }
console.log(mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 }));
// Expected: { a: 1, b: 3, c: 4 }
console.log(mergeObjects({}, { name: "Alice" }));
// Expected: { name: "Alice" }
console.log(mergeObjects({ hobby: "reading" }, {}));
// Expected: { hobby: "reading" }