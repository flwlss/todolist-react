import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Context from './context';

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: 'купить хлеб' },
    { id: 2, completed: false, title: 'купить масло' },
    { id: 3, completed: false, title: 'купить молоко' }
  ])

  function toggleTodo(id: any) {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }

  function removeTodo(id: any) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title: any) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false
    }]))
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>React</h1>
        <AddTodo onCreate={addTodo} />
        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : (
          <p>No todos!</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
