import { useEffect, useState } from 'react';
import './TodoList.css';
import Deadline from '../../compontents/Deadline/Deadline';
import TodoItem from '../../compontents/TodoItem/TodoItem'
import axios from 'axios'
import AddTodo from '../../compontents/AddTodo/AddTodo';


function TodoList() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/todo/todo-list/')
    .then(response => {
        setTodos(response.data)
    })
  }, [])

  const deleteTodo = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/todo/todo-list/${id}/`)
    .then(() => {
      const new_todos = todos.filter(e => e.id !==id)
      setTodos(new_todos)
    })
  }

  const addTodoHandler = (todo) => {
    const new_todos = [todo, ...todos]
    setTodos(new_todos)
  }


  return (
    <div className='TodoList'>
      <div className='container'>
        {/* <Deadline /> */}
        <AddTodo addTodoHandler={addTodoHandler}/>
        <div>
            {
            todos.length
            ?
              todos.map((todo, i) => {
                return <TodoItem 
                  key={todo.id} 
                  index={i+1} 
                  title={todo.title} 
                  content={todo.content}
                  clicked={() => {deleteTodo(todo.id)}}
                  />
              })
            :
            <h1>Hec bir is yoxdur!</h1>
            }
        </div>
      </div>
    </div>
  );
}

export default TodoList;
