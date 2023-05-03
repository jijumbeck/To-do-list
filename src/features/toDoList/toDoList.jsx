import ToDoListLine from "../toDoLine/toDoLine";


const ToDoList = ({taskList, deleteTaskHandler, updateTaskTextHandler, updateIsCompletedHadler}) => {

    return(
        <div>
            {
                taskList.map(
                    (task, index) => <ToDoListLine 
                                        key={index} {...task} 
                                        onClickDeleteButton={deleteTaskHandler}
                                        onChangeTaskText={updateTaskTextHandler}
                                        onChangeIsCompleted={updateIsCompletedHadler}
                                        />)
            }
        </div>
    )
}

export default ToDoList;