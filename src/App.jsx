import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import reactLogo from './assets/react.svg'

const App = () => {
  const name = "Sang";
  const age = 23;
  const data = {
    address: "HCM",
    country: "Viet Nam"
  }
  const addNewTodo = (name) => {
    alert(`call me ${name}`);
  }

  // addNewTodo()
  // {key : value}
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew addNewTodo={addNewTodo} />
      <TodoData
        name={name}
        age={age}
        data={data}

      />

      <div className='todo-image'>
        <img className='logo' src={reactLogo} />
      </div>
    </div>
  )
}

export default App
