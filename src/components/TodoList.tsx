import React from 'react';
import '../assets/styles/todolist.css'
import TodoItem from './TodoItem';

export default function TodoList(props: any) {
    return (
        <ul className="list">
            {props.todos.map((todo: any, index: any) => {
                return <TodoItem
                    todo={todo}
                    key={todo.id}
                    index={index}
                    onChange={props.onToggle} />
            })}
        </ul>
    )
}