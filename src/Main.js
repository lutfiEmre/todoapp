import React, {useState} from 'react'
import ItemsContext from './ItemsContext';
import Navbar from "./NavBar";
import TodoList from "./TodoList";

const Main = () => {
    const [todo,setTodo] = useState([])
    const [filter,setFilter] = useState([])
    const [filterText,setfilterText] = useState([])
    const [completed,setCompleted] = useState(0)
    return(
        <ItemsContext.Provider value={{completed,setCompleted,todo,setTodo,filter,setFilter,filterText,setfilterText}}>
            <Navbar></Navbar>
            <TodoList></TodoList>
        </ItemsContext.Provider>
    )
}

export default Main
