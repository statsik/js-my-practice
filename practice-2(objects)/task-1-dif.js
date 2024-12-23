// Створіть об'єкт contactBook,
// який зберігатиме список контактів та надаватиме методи для додавання,
// видалення та пошуку контактів.

const contactBook = {
    addContact(contact) {
        this.contact1 = contact;
    },
    deleteContact(contact) {
        delete this.contact;
    },
    findContact(contact) {
        keys = Object.keys(contactBook);
        for (const key of keys) {
            if (this.key === contact) {
                return this.key;
            }
        }
    },
}

console.log(contactBook.findContact("Alice")); 
// Очікувано: { name: "Alice", phone: "987-654-321" }
contactBook.deleteContact("Bob");
console.log(contactBook.findContact("Bob")); 
// Очікувано: undefined (контакт видалено)
console.log(contactBook.contacts);
// Очікувано: [{ name: "John", phone: "123-456-789" }, { name: "Alice", phone: "987-654-321" }]