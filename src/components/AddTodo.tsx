import React, { useState } from 'react';
import '../assets/styles/addtodo.css'

function AddTodo({ onCreate }: { onCreate: any }) {
    const [value, setValue] = useState('')

    function submitHandler(event:any) {
        event.preventDefault()

        if (value.trim()) {
            onCreate(value)
            setValue('')
        }
    }

    return (
        <form className="new-todo" onSubmit={submitHandler}>
            <input value={value} onChange={event => setValue(event.target.value)} />
            <button type="submit">Add todo</button>
        </form>
    )
}

export default AddTodo