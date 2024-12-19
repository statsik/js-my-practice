//Напиши функцію, яка приймає массив чисел і повертає новий массив,
// де кожен елемент є середньоарифметичним всіх сусідніх елементів.

function averageNeighbours(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++){
        if (arr.length === 1) { 
            newArr.push(arr[i]);
        } else if (i === 0) {
            newArr.push((arr[i] + arr[i + 1]) / 2);
        } else if (i === (arr.length - 1)) {
            newArr.push((arr[i] + arr[i-1]) / 2);
        } else {
           newArr.push((arr[i - 1] + arr[i + 1]) / 2); 
        }        
    }
    return newArr;
}

console.log(averageNeighbours([1, 2, 3, 4, 5])); // [1.5, 2, 3, 4, 4.5]
console.log(averageNeighbours([10, 20, 30, 40])); // [15, 20, 25, 35]
console.log(averageNeighbours([1, 1, 1])); // [1, 1, 1]
console.log(averageNeighbours([5])); // [5]
console.log(averageNeighbours([1, 2])); // [1.5, 1.5]
console.log(averageNeighbours([3, 5, 7, 9, 11])); // [4, 5, 6, 8, 10]