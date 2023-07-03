const toDoListKeyLocalStorage = 'to-do-list';

export const saveToDoList = async (toDoList) => {
    localStorage.setItem(toDoListKeyLocalStorage, JSON.stringify(toDoList));
}

export const getToDoListFromLocalStorage = () => {
    const toDoListJSON = localStorage.getItem(toDoListKeyLocalStorage);
    return JSON.parse(toDoListJSON);
}