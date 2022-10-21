import React from 'react';
import TodoItem from './TodoItem';
import styles from './TodoList.module.css';

const TodoList = ({ data , onDel, onToggle }) => {
    return (
        <ul className={styles.TodoList}>
            {
                data.map( todo => <TodoItem key={todo.id} todo={todo} onDel={onDel} onToggle={onToggle} />)
            }            
        </ul>
    );
};

export default TodoList;