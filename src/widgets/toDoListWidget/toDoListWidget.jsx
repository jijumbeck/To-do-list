import ToDoList from "../../features/toDoList/toDoList";
import { useState, useEffect } from "react";
import { tasks, update } from "../../app/loadTaskList";
import { Button } from "@mui/material";


const ToDoListWidget = () => {
    const [taskList, setTasks] = useState([]);

    // useEffect(() => {
    //     update(tasks);
    // }, [taskList]);

    return(
        <>
            <Button onClick={
                () => {
                    let newTasks = [...taskList];
                    newTasks.push(
                        {
                            index: (newTasks.length === 0 ? 0 : newTasks.at(newTasks.length - 1).index + 1),
                            taskText: 'New Task',
                            isComplete: false
                        }
                    )
                    setTasks(newTasks);
                }
            }>Новая таска</Button>
            <ToDoList 
                taskList={taskList}
                deleteTaskHandler={index => {
                    const filterTasks = taskList.filter(task => task.index !== index);
                    setTasks(filterTasks);
                }}
            />
        </>
    )
}

export { ToDoListWidget };