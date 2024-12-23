//Створіть об'єкт contactBook,
// який зберігатиме список контактів та надаватиме
// методи для додавання, видалення та пошуку контактів.

contactBook = {
    contacts: [],
    addContact(contact) {
        return this.contacts.push(contact);
    },
    deleteContact(contactName) {
        const index = this.contacts.indexOf(contactName);
        return this.contacts.splice(index, 1);
    },
    findContact(contactName) {
        for (const contact of this.contacts) {
            if (contact.name === contactName) {
                return contact;
            }
        }
        return "The contact wasn't found";
    },
}

contactBook.addContact({ name: "John", phone: "123-456-789" });
contactBook.addContact({ name: "Alice", phone: "987-654-321" });
contactBook.addContact({ name: "Bob", phone: "555-555-555" });
console.log(contactBook.contacts);

console.log(contactBook.findContact("Alice"));
console.log(contactBook.findContact("Unknown"));
contactBook.deleteContact("Bob");
console.log(contactBook.findContact("Bob"));
console.log(contactBook.contacts);
contactBook.addContact({ name: "Alice", phone: "222-222-222" });
console.log(contactBook.contacts);
contactBook.deleteContact("Alice");
console.log(contactBook.findContact("Alice"));
console.log(contactBook.contacts);
contactBook.addContact({ name: "Dave", phone: "444-555-666" });
console.log(contactBook.findContact("Dave"));
console.log(contactBook.contacts);