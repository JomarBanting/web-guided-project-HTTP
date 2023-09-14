import './App.css';
import { useEffect, useState } from "react"
import { getTodos, postTodo, putTodo, deleteTodo } from './actions/todos';


function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    getData();
  }, [])

  const getData = () => {
    getTodos().then(res => {
      setTodos(res);
    })
  }

  const addTodo = () => {
    postTodo(todo).then((res) => {
      getData();
    })
  }

  const completeTodo = (todo) => {
    putTodo(todo).then(() => {
      getData();
    })
  }

  const deleteTodoItem = (id) => {
    deleteTodo(id).then((res) => {
      console.log(res);
      getData();
    })
  }

  return (
    <div className="App">
      <input value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button onClick={addTodo}>submit</button>
      {todos.map((todo, index) => {
        return (<div key={index}>
          <span className={todo.isDone ? "done" : ""}>{todo.description}</span>
          <span>
            {todo.isDone ? <button onClick={() => deleteTodoItem(todo.id)}>Delete</button> : <button onClick={() => { completeTodo(todo) }}>Complete</button>}
          </span>
        </div>)
      })}

    </div>
  )
}

export default App;
