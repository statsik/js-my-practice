//Напиши функцію яка приймає два параметри start та end. Функія повина повернути масив де будуть числа з
//діапазону але лише ті у яких не має цифри 5.
//К прикладу числа (51, 25, 15,256) не підходять бо містять символ "5" у собі.

function withoutFive(start, end) {
    const startMassive = [];
    const resultMassive = [];
    for(let i = start; i <= end; i++){
        startMassive.push(i);
    }
    for (let j = 0; j < startMassive.length; j++){
        if (!startMassive[j].toString().includes("5")) {
            resultMassive.push(startMassive[j]);
        }
    }
    return resultMassive;
}


console.log(withoutFive(1, 20));   // [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20]
console.log(withoutFive(50, 60));  // [60]
console.log(withoutFive(0, 100));  // Масив чисел від 0 до 100 без цифри "5"
console.log(withoutFive(5, 15));   // [6, 7, 8, 9, 10, 11, 12, 13, 14]
console.log(withoutFive(98, 102)); // [98, 99, 100, 101, 102]