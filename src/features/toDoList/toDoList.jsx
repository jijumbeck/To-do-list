import ToDoListLine from "../toDoLine/toDoLine";


const ToDoList = ({taskList, deleteTaskHandler}) => {

    return(
        <div>
            {
                taskList.map(
                    (task, index) => <ToDoListLine 
                                        key={index} {...task} 
                                        onClickDeleteButton={deleteTaskHandler}
                                        />)
            }
        </div>
    )
}

export default ToDoList;