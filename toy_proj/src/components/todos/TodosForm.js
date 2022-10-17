import React, { useState } from 'react';

const TodosForm = ({onAdd}) => {
  const [todoText, setTodoText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    onAdd(todoText);
  }
  
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={todoText} onChange={e => setTodoText(e.target.value)}/>
      <button type='submit'>추가</button>
    </form>
  );
};

export default TodosForm;