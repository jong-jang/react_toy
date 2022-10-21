import React, { useEffect, useRef, useState } from 'react';
import TodoForm from './TodosForm';
import TodoList from './TodoList';
import styles from './Todos.module.css';

const Todos = () => {
    const no = useRef(1)
    const [ data , setData ] = useState(
        () => JSON.parse(localStorage.getItem('data')) || []
    )   

    useEffect( () => {
        localStorage.setItem('data', JSON.stringify(data))
    },[data])

    const onDel = (id) => {
        setData( data.filter( todo => todo.id !== id ))
    }  
    const onAdd = ( text )  => {
      setData([
          ...data ,
          {
              id: no.current++ ,
              text ,
              isActive: false 
          }
      ])
    }    
    const onToggle = ( id )  => {
      setData( data.map( todo => todo.id === id ? { ...todo , isActive: !todo.isActive } : todo ))
    }


    return (
        <div className={styles.Todos}>
            <h1>일정관리앱</h1>
            <TodoForm onAdd={onAdd} />
            <TodoList data={data} onDel={onDel} onToggle={onToggle} />
        </div>
    );
};

export default Todos;