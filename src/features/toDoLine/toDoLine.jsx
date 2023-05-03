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
                    onChange={(event) => props.onChangeIsCompleted(props.index, event.target.checked)} 
                />
                <TextField 
                    variant="standard" 
                    defaultValue={taskText}
                    onChange={(event) => props.onChangeTaskText(props.index, event.target.value)}
                />
            </div>
            <IconButton onClick={() => {
                props.onClickDeleteButton(props.index);
            }}>
                <DeleteButton/>
            </IconButton>
        </div>
    )
}

export default ToDoListLine;