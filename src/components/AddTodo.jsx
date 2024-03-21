
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../slice/todoSlice';

const AddTodo = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim() === '') return;
    dispatch(addTodo({ id: Date.now(), text, completed: false }));
    setText('');
  };

  return (
    <form style={{textAlign:'center'}} onSubmit={handleSubmit}>
      <input style={{marginRight:'30px',width:'400px',backgroundColor:'	 #e6e6ff',border:'0px',padding:'10px'}} type="text" value={text} onChange={e => setText(e.target.value)} />
      <button type="submit" style={{padding:'10px',border:'0px',color:'white',backgroundColor:'	 #666699'}}>Add Todo</button>
    </form>
  );
};

export default AddTodo;
