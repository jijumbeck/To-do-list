import useToDoList from "../../entities/toDoList/model/useToDoList";
import NewToDoButton from "../../entities/toDoList/ui/newToDoButton/newToDoButton";
import ToDoListLine from "../../entities/toDoList/ui/toDoLine/toDoLine";


const ToDoList = ({ taskList, deleteTaskHandler, updateTaskTextHandler, updateIsCompletedHadler }) => {
    const { toDoList, addNewTask, deleteTask, updateTask } = useToDoList();

    return (
        <div>
            {
                toDoList.map(
                    toDo => <ToDoListLine
                        key={toDo.id} 
                        {...toDo}
                        onClickDeleteButton={deleteTask}
                        onUpdateTask={updateTask}
                    />)
            }
            <NewToDoButton addNewTaskHandler={addNewTask} />
        </div>
    )
}

export default ToDoList;