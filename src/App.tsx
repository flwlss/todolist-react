import React from 'react';
import { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Context from './context';

function App() {
  let [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: 'купить хлеб' },
    { id: 2, completed: false, title: 'купить масло' },
    { id: 3, completed: false, title: 'купить молоко' }
  ])
  const data = localStorage.getItem("todos");
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
    // localStorage.setItem("todos", JSON.stringify(todos))
  }

  function addTodo(title: any, id: any) {
    setTodos(todos.concat([{
      id: Date.now(),
      completed: false,
      title,
    }
    ])
    )
    localStorage.getItem("todos")
  }

  localStorage.setItem("todos", JSON.stringify(todos))

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
