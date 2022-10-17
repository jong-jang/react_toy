import React, { useRef, useState } from 'react';
import TodoList from './TodoList';
import TodosForm from './TodosForm';

const dataList = [
  {id:1, todo:'화장실 청소', chk:false},
  {id:2, todo:'설거지', chk:false},
  {id:3, todo:'퇴근', chk:false},
  {id:4, todo:'출근', chk:false}
]

const Todos = () => {
  const [data, setData] = useState(dataList);
  const [view, setView] = useState(false);
  const no = useRef(data.length+1);
  const onMod = () => {
    setView(!view)
  }
  const onAdd = (text) => {
    setData([...data, {
      id:no.current++,
      todo:text,
      chk:false
    }])
  }
  return (
    <div>
      <h1> Todos </h1>
      {view && <TodosForm onAdd={onAdd} />}
      <TodoList data={data} />
      <button onClick={onMod}>
      { 
        view ? '수정끝' : '수정하기'
      }
      </button>
    </div>
  );
};

export default Todos;