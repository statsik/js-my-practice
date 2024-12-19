//Напиши функцію,
// яка приймає массив чисел і повертає новий массив,
// де елементи відсортовані в порядку збільшення або зменшення.

function sortArray(arr,up = "asc"){
    if (up = "asc") {
        arr.sort((a, b) => a - b);
        return arr;
    } else if (up = "desc") {
        arr.sort((a, b) => a + b);
        return arr;
    }
}

console.log(sortArray([5, 2, 8, 1, 4])); // [1, 2, 4, 5, 8] (за замовчуванням "asc")
console.log(sortArray([5, 2, 8, 1, 4], "asc")); // [1, 2, 4, 5, 8] (зростання)
console.log(sortArray([5, 2, 8, 1, 4], "desc")); // [8, 5, 4, 2, 1] (спадання)
console.log(sortArray([3, 3, 2, 1, 1], "asc")); // [1, 1, 2, 3, 3]
console.log(sortArray([3, 3, 2, 1, 1], "desc")); // [3, 3, 2, 1, 1]