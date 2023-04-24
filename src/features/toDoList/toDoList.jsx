import ToDoListLine from "../toDoLine/toDoLine";
import { useState, useEffect } from "react";
import { tasks, update } from "../../app/loadTaskList";
import { Button } from "@mui/material";

const ToDoList = () => {
    const [taskList, setTasks] = useState([...tasks]);
    console.log(taskList.length);

    useEffect(() => {
        update(tasks);
    }, [taskList]);

    return(
        <div>
            <Button onClick={
                () => {
                    let newTasks = [...taskList];
                    newTasks.push(
                        {
                            taskText: 'New Task',
                            isComplete: false
                        }
                    )
                    setTasks(newTasks);
                }
            }>Новая таска</Button>
            {
                taskList.map((task, index) => <ToDoListLine key={index} {...task} onClickDeleteButton={() => {
                    let newTasks = [...taskList];
                    newTasks.splice(index, 1);
                    setTasks(newTasks);
                    console.log(newTasks);
                }}/>)
            }
        </div>
    )
}

export default ToDoList;