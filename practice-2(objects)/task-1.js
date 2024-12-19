//Напиши функцію, яка створює об'єкт з ім'ям і віком.
//Функція повинна приймати два аргументи: ім'я (рядок) і вік (число).
//Поверни цей об'єкт.

function create_object(str,num) {
    nameAge = {
        string: str,
        number: num,
    }
    return nameAge;
}

console.log(create_object("Hi", 25));