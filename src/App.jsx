import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

function App() {
  return (
    <>
      <div>
        <h1 style={{ textAlign: 'center' }}>ToDo APP</h1>
        <AddTodo />
        <TodoList />
      </div>
    </>
  )
}

export default App
