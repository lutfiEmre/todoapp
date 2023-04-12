import React from "react";
import kapatmabutonu from './close-svgrepo-com.svg'
import checkbutonu from './check-mark-svgrepo-com.svg'
import { motion } from "framer-motion"


const TodoItem = (props) => {
    const {setCompleted, todo, setFilter, setTodo, filter, filterText } = props.item;

    const deleteTodo = (id) => {
        const updatedTodos = todo.filter(prev => prev.id !== id);
        setTodo(updatedTodos);
        setFilter(updatedTodos);
    };

    const checkTodo = (id) => {
        const updatedTodos = todo.map((item) => {
            if (item.id === id) {
                return { ...item, completed: true };
            }
            return item;
        });
        const comp = todo.filter(item => item.completed)
        setCompleted(comp.length +1)
        setTodo(updatedTodos);
        setFilter(updatedTodos)
    };

    return (
        <>
            {filterText === '' ? (
                todo.map(item => (
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ rotate: 720, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20
                        }}
                        id={item.id} className={'todo'}>
                        <div className={'todo-top'}>
                            <h1 style={{ color: item.completed ? 'green' : 'red' }}>{item.title}</h1>
                        </div>
                        <div className={'image'}>
                            {item.completed ? '' : <img onClick={() => deleteTodo(item.id)} src={kapatmabutonu} alt=""/>}
                            <img style={{ transform: item.completed ? 'scale(1)' : '' }} onClick={() => checkTodo(item.id)} src={checkbutonu} alt=""/>
                        </div>
                    </motion.div>
                ))
            ) : (
                filter.map(item => (
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ rotate: 360, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20
                        }}
                        id={item.id} className={'todo'}>
                        <div className={'todo-top'}>
                            <h1 style={{ color: item.completed ? 'green' : 'red' }}>{item.title}</h1>
                        </div>
                        <div className={'image'}>
                            {item.completed ? '' : <img onClick={() => deleteTodo(item.id)} src={kapatmabutonu} alt=""/>}
                            <img style={{ transform: item.completed ? 'scale(1)' : '' }}  onClick={() => checkTodo(item.id)} src={checkbutonu} alt=""/>
                        </div>
                    </motion.div>
                ))
            )}
        </>
    );
};

export default TodoItem;
