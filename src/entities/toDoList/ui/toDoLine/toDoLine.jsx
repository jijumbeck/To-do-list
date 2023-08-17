import { useState } from "react";

import DeleteButton from "../../../../shared/ui/deleteButton/deleteButton";
import './toDoLine.css';
import { Checkbox, IconButton, TextField } from "@mui/material";
import '@fontsource/roboto/500.css';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import useInput from "../../../../shared/helpers/useInput";

const ToDoListLine = (props) => {
    const isCompleteInput = useInput(props.isComplete, (e) => e.target.checked);
    const toDotextInput = useInput(props.toDoText);

    return (
        <div className={ isCompleteInput.value ? "toDoListLine done" : "toDoListLine"}>
            <Checkbox
                onChange={
                    (event) => {
                        isCompleteInput.onChange(event);
                        props.onUpdateTask(props.id, props.toDoText, event.target.checked)
                    }}
                checked={isCompleteInput.value}
            />

            <TextField
                onChange={(event) => {
                    toDotextInput.onChange(event)
                    props.onUpdateTask(props.id, event.target.value, props.isComplete);
                }}
                value={toDotextInput.value}
                variant="standard"
                fullWidth
            />
            <IconButton onClick={() => props.onClickDeleteButton(props.id)}>
                <HighlightOffIcon />
            </IconButton>
        </div>
    )
}

export default ToDoListLine;