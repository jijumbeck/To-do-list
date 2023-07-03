import ToDoList from "../../features/toDoList/toDoList";
import './toDoListWidget.css';

const ToDoListWidget = () => {
    return(
        <div className="toDoListWidget">
            <h1>To Do List</h1>
            <ToDoList />
        </div>
    )
}

export { ToDoListWidget };