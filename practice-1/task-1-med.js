// Напиши функцію яка приймає два масиви(arr1, arr2),
// та повертає новий масив де будуть лише елементи масиву arr1 яких не має у масиві arr2.

function chooseArr(arr1, arr2) {
    const newArr = [];
    for (let i = 0; i < arr1.length; i++){
        if (!arr1.includes(arr2[i])) {
            newArr.push(arr1[i]);
        } 
    }
    return newArr;
}

console.log(chooseArr([1, 2, 3, 4, 5], [4, 5, 6, 7]));
console.log(chooseArr([], [1, 2, 3]));
console.log(chooseArr([1, 2, 3], []));
console.log(chooseArr([4, 5], [4, 5, 6, 7]));
console.log(chooseArr([1, 2, 3], [4, 5, 6]));