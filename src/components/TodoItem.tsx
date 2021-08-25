import React, { useContext } from 'react';
import '../assets/styles/todoitem.css'
import Context from '../context';

export default function TodoItem({ todo, index, onChange }: { todo: any, index: any, onChange: any }) {

    const { removeTodo } = useContext(Context) as { removeTodo:any }

    const classes = []

    if (todo.completed) {
        classes.push('done')
    }
    return (
        <li className="item">
            <span className={classes.join(' ')}>
                <input className="item-checkbox"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onChange(todo.id)} />
                <strong>{index + 1}</strong>
                &nbsp;
                {todo.title}
            </span>
            <button className="remove" onClick={() => removeTodo(todo.id)}>&times;</button>
        </li>
    )
}