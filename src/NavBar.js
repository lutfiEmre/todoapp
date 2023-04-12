
import ItemsContext from "./ItemsContext";
import React, {useContext, useEffect, useRef, useState} from 'react'
import { motion } from "framer-motion"
const Navbar = () => {
    const todowrite = useRef()
    const todofilter = useRef()
    const [uyari,setUyari] = useState('')
    const [goster,setGoster] = useState(false)
    const {setTodo,todo,filter,setFilter,filterText,setfilterText,completed,setCompleted} = useContext(ItemsContext)
    const filterTodo = () => {
        const filteritem = todofilter.current.value.toLowerCase()
        setfilterText(filteritem)
        const filtercase = todo.filter(prev => prev.title.toLowerCase().startsWith(filteritem))
        if (filteritem.length >0 ){
            setFilter(filtercase)
        }else{
            setTodo(todo)
        }
    }
    const addTodo = (e) => {
        e.preventDefault()
        const item = todowrite.current.value.toLowerCase()
        const itembox = {
            id: Date.now(),
            title: item,
            completed: false
        }
        const itemcase = [...todo, itembox]
        if (item.length > 0){
            setFilter(itemcase)
            setTodo(itemcase)
            todowrite.current.value = ''
            console.log(todo)
        }else{
            setUyari('You didn't write anything. Write something to add to-do')
            setTimeout(() => {
                setUyari('')
            },3000)
        }
    }
    const enter = () => {
        if (filterText.length >0){
            filterTodo()
        }
        const item = todowrite.current.value.toLowerCase()
        const itembox = {
            id: Date.now(),
            title: item,
            completed: false
        }
        const itemcase = [...todo, itembox]
        if (item.length > 0){
            setTodo(itemcase)
            setFilter(itemcase)
            todowrite.current.value = ''
        }
    }
    const selectedTodo = () => {
        if(goster){
            const degercik = todo.filter(prev => prev.completed === true)
            setFilter(degercik)
            if(degercik.length === 0){
                setUyari('There is no todo that YOU complete')
                setTimeout(() => {
                    setUyari('')
                    setTodo(todo)
                    setFilter(todo)
                },3000)
            }
        }else{
            setFilter(todo)
        }
    }

    return(
       <>
           <div className={'navbar'}>
              <div>
                  <div  className={'filter'}>
                      <h3>Filter Todo</h3>
                      <input onInput={filterTodo} ref={todofilter} type="text"/>
                  </div>
                  <h1>Todo App</h1>
                  <div className={'navbar-item'}>
                      <input onKeyDown={(event) => {
                          if (event.key === 'Enter'){
                              enter()
                          }
                      }
                      } ref={todowrite} placeholder={'Write your To-do'} type="text"/>
                      <motion.div
                          whileHover={{ scale: [null, 1.5, 1.4] }}
                          transition={{ duration: 0.3 }}
                          className={'button'}>
                          <button onClick={addTodo}>Add Todo</button>
                      </motion.div>

                  </div>
                  <div className={'bilgi'}>
                      <div className={'bilgi-kutu'}>
                          <h1>{todo.length}
                          <span>TODO</span></h1>
                      </div>
                      <motion.div

                          whileHover={{ scale: [null, 1.5, 1.4] }}
                          transition={{ duration: 0.3 }}
                          onClick={() => {
                          setGoster(!goster)
                          selectedTodo()
                      }} className={'bilgi-kutu2'}>
                          <h1>Completed To-do</h1>
                          <span>show/hide</span>
                          <h3>{completed}</h3>
                      </motion.div>
                  </div>
              </div>
           </div>
           <motion.div

               initial={{ scale: 0 }}
               animate={{ scale: 1 }}
               transition={{
                   type: "spring",
                   stiffness: 260,
                   damping: 20
               }}>
               <h2 className={'uyari'}>{uyari}</h2>
           </motion.div>
          </>
    )
}

export default Navbar
