var tasks = [] || JSON.parse(localStorage.getItem('tasks'));

// const addTask = (task) => {
//     if (task.isComplete === undefined || task.taskName === undefined) {
//         throw new TypeError("Task's isComplete or taskName are undefined.");
//     }

//     tasks.push({...task});
// }

// const deleteTask = (number) => {
//     if (number < 0 || number + 1 > tasks.length) {
//         throw new TypeError("Number is out of tasks range.")
//     }

//     tasks.splice(number, 1);
// }

// const renameTask = (number, newText) => {
//     if (number < 0 || number + 1 > tasks.length) {
//         throw new TypeError("Number is out of tasks range.")
//     }

//     tasks[number].taskName = newText;
// }

// const completeTask = (number) => {
//     if (number < 0 || number + 1 > tasks.length) {
//         throw new TypeError("Number is out of tasks range.")
//     }

//     tasks[number].isComplete = !tasks[number].isComplete;
// }

const update = (newTasks) => {
    tasks = [...newTasks];
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

export { tasks, update };