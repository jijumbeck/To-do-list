import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { getToDoListFromLocalStorage, saveToDoList } from "../helpers/toDoListStorage";

export default function useToDoList() {
    const [toDoList, setToDoList] = useState(getToDoListFromLocalStorage() || []);

    useEffect(() => {
        saveToDoList(toDoList);
    }, [toDoList]);
    
    const addNewTask = (toDoText) => {
        const newTask = {
            id: uuidv4(),
            toDoText: toDoText,
            isComplete: false,
        }
        setToDoList([...toDoList, newTask]);
    }

    const deleteTask = (id) => {
        setToDoList(toDoList.filter(toDo => toDo.id !== id));
    }

    const updateTask = (id, toDoText, isComplete) => {
        const toDoIndex = toDoList.findIndex(toDo => toDo.id === id);
        const filterToDo = toDoList.filter(toDo => toDo.id !== id);
        filterToDo.splice(toDoIndex, 0, {
            id: id,
            toDoText: toDoText,
            isComplete: isComplete,
        });
        setToDoList(filterToDo);
    }

    return { toDoList, addNewTask, deleteTask, updateTask }
};
