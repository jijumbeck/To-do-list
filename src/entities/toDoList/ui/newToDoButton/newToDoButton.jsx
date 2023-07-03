import { Button, IconButton, TextField } from "@mui/material";
import ToDoListLine from "../toDoLine/toDoLine";
import LineCard from "../../../../shared/ui/LineCard/LineCard";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import useInput from "../../../../shared/helpers/useInput";
import { useEffect } from "react";

const NewToDoButton = ({ addNewTaskHandler }) => {
    const newTaskPlaceholder = 'Add new task';
    const newToDo = useInput('');

    useEffect(() => {
    }, [])

    return (
        <LineCard>
            <IconButton onClick={() => {
                console.log(newToDo.value);
                addNewTaskHandler(newToDo.value);
                newToDo.clearInput();
                }}
                >
                <AddCircleIcon />
            </IconButton>

            <TextField
                variant="standard"
                fullWidth
                sx={{
                    paddingRight: 5,
                }}
                placeholder={newTaskPlaceholder}
                {...newToDo}
            />
        </LineCard>
    )
}

export default NewToDoButton;