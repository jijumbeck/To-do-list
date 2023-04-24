import { useState } from "react";

import DeleteButton from "../../shared/ui/deleteButton/deleteButton";
import './toDoLine.css';
import { Checkbox, IconButton, TextField } from "@mui/material";
import '@fontsource/roboto/500.css';

const ToDoListLine = (props) => {
    const [taskText, setTaskName] = useState(props.taskText);
    const [isCompleted, setIsCompleted] = useState(props.isCompleted);

    return(
        <div className="toDoListLine">
            <div>
                <Checkbox 
                    {...isCompleted ? 'defaultChecked' : ''}
                    onChange={(event) => setIsCompleted(event.target.value)} 
                />
                <TextField 
                    variant="standard" 
                    defaultValue={taskText}
                    onChange={(event) => setTaskName(event.target.value)}
                />
            </div>
            <IconButton onClick={props.onClickDeleteButton}>
                <DeleteButton/>
            </IconButton>
        </div>
    )
}

export default ToDoListLine;