
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, toggleComplete } from '../slice/todoSlice';

const TodoList = () => {
    const todos = useSelector(state => state.todoReducer);
    const dispatch = useDispatch();

    const handleDelete = id => {
        dispatch(deleteTodo(id));
    };

    const handleToggleComplete = id => {
        dispatch(toggleComplete(id));
    };
    const completedTodosCount = todos.filter(todo => todo.completed).length;
    return (
       <>
            <table style={{width:'100%',marginTop:'70px',height:'100px'}}>
                <thead style={{marginBottom:'100px',fontSize:'20px',backgroundColor:'#d1d1e0',padding:'10px'}}>
                    <tr>
                        <th>Status</th>
                        <th>Task</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody style={{textAlign:'center',backgroundColor:' #f2e6ff'}}>
                    {todos?.map(todo => (
                        <tr key={todo.id}>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => handleToggleComplete(todo.id)}
                                />
                            </td>
                            <td style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                                {todo.text}
                            </td>
                            <td>
                                <button style={{backgroundColor:'#cc6699',border:'0px',color:'white'}} onClick={() => handleDelete(todo.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div style={{fontSize:'20px'}}>
                Completed Todos: <span style={{color:'red'}}>{completedTodosCount}</span>
            </div>
       </>
        
    );
};

export default TodoList;
