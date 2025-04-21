import React, { useState } from 'react'

const TodoForm = ({ addTask }) => {
    const [inputVal, setInputVal] = useState({ id: "", content: "", checked: false, edit: false });

    const handleKeyDown = (e) => {
        if (e.key === ' ' && (inputVal.content.length === 0)) {
            e.preventDefault();
            alert('Enter a task');
        }
    };

    const handleInput = (value) => {
        setInputVal({ id: new Date(), content: value, checked: false, edit: false  });
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        addTask(inputVal);
        setInputVal({ id: "", content: "", checked: false, edit: false });
    }

    return (
        <section className='form'>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input
                        type="text"
                        className='todo-input'
                        autoComplete='off'
                        value={inputVal.content}
                        onChange={(e) => handleInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        name='todo'
                    />
                </div>
                <div>
                    <button type='submit' className='todo-btn'>
                        Add Task
                    </button>
                </div>
            </form>
        </section>
    )
}

export default TodoForm;