import React from 'react';

const TodoItem = ({item}) => {
  return (
    <li>
      {item.todo}
      <input type="checkbox" />
    </li>
  );
};

export default TodoItem;