//Напиши функцію яка приймає масив та повертає масив лише з тих елементів які більші за середнє значення
// всіх елементів масиву.

function mediumValues(mas) {
    let sum = 0;
    const result = [];
    for(let i = 0; i < mas.length; i++){
        sum += mas[i];
    }
    const averageValue = sum / (mas.length);
    for (let j = 0; j < mas.length; j++){
        if(mas[j] > averageValue) {
            result.push(mas[j]);
        }
    }
    return result;
}


console.log(mediumValues([1, 2, 3, 4, 5]));  
console.log(mediumValues([10, 20, 30, 40, 50]));  
console.log(mediumValues([7, 8, 9, 10, 11]));  
console.log(mediumValues([1, 1, 1, 1, 1]));  
console.log(mediumValues([15, 25, 35, 45, 55]));