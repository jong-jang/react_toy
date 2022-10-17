import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({data}) => {
  return (
    <ul>
      {
        data.map(item => <TodoItem item={item} key={item.id} />)
      }
    </ul>
  );
};

export default TodoList;