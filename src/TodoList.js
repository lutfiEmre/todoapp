import React, {useContext} from "react";
import ItemsContext from "./ItemsContext";
import TodoItem from "./TodoItem";


const TodoList = () => {
    const {setTodo,completed,setCompleted,todo,filter,filterText,setfilterText,setFilter} = useContext(ItemsContext)

    const proplar = {
        setTodo,
        todo,
        filter,
        completed,
        setCompleted,
        setFilter,
        filterText,
        setfilterText
    }
    return(
        <div className={'todo-section'}>
            <div className="todo-list">
                <TodoItem item={proplar}/>
            </div>
        </div>
    )
}

export default TodoList;