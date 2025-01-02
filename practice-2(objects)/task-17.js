//Створіть об'єкт rectangle, який представлятиме прямокутник з
// методами для обчислення його площі та периметра.
//Об'єкт повинен приймати довжини двох сторін під час створення.

const rectangle = {
    create(len,wid) {
        rectangle.length = len;
        rectangle.width = wid;
    },
    area() {
        return this.length * this.width;
    },
    perimeter() {
        return ((this.length * 2) + (this.width * 2));
    },
}

rectangle.create(5, 10);
console.log(`Area: ${rectangle.area()}`); // Очікувано: 50
console.log(`Perimeter: ${rectangle.perimeter()}`); // Очікувано: 30

rectangle.create(7, 3);
console.log(`Area: ${rectangle.area()}`); // Очікувано: 21
console.log(`Perimeter: ${rectangle.perimeter()}`); // Очікувано: 20

rectangle.create(0, 4);
console.log(`Area: ${rectangle.area()}`); // Очікувано: 0
console.log(`Perimeter: ${rectangle.perimeter()}`); // Очікувано: 8