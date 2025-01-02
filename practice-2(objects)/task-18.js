// Створіть об'єкт toDoList, який зберігатиме список задач та
// надаватиме методи для додавання нових завдань,
// позначки задачі як виконаної та виведення списку завдань.

const toDoList = {
    tasksList:{},
    showTasks() {
        return this.tasksList;
    },
    addTask(id,task) {
        this.tasksList[id] = task;
    },
    markAsCompleted(id, task) {
        const keys = Object.keys(this.tasksList);
        for (const key in keys) {
            if (key === id) {
                delete this.tasksList[id];
            }
        }
        let idd = "done";
        this.tasksList[idd] = task;
    },
    
}

toDoList.addTask("one","Buy groceries");
toDoList.addTask("two","Clean the house");
toDoList.addTask("three","Finish homework");

console.log("Before completing tasks:");
console.log(toDoList.showTasks());

toDoList.markAsCompleted("two","Clean the house");

console.log("\nAfter completing 'Clean the house':");
console.log(toDoList.showTasks());

toDoList.markAsCompleted("one","Buy groceries");

console.log("\nAfter completing 'Buy groceries':");
console.log(toDoList.showTasks());