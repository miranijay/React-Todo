import React, { useState } from 'react';
import './Todo.css';
import TodoForm from './TodoForm.jsx';
import TodoList from './TodoList.jsx';
import TodoDate from './TodoDate.jsx';

const Todo = () => {
    const [tasks, setTasks] = useState([]);
    
    const handleFormSubmit = (inputVal) => {
        const {id, content, checked} = inputVal;

        if(!content || content.trim() === "" || content.length < 0) {
            return alert('Enter a task');
        }

        const todoExist = tasks.find((task) => task.content === content);
        if(todoExist) {
            alert('Task already exists');
            return;
        }

        setTasks((prevTask) => {
            return [...prevTask, {id, content, checked}]
        })
    }

    // Handle Delete Button Function
    const handleDelete = (value) => {
        const updatedTask = tasks.filter((task) => task.content !== value )
        setTasks(updatedTask);
    }

    // Handle Clear All Button Function
    const handleClear = () => {
        setTasks([]);
    }

    // Handle Check Function
    const handleCheck = (data) => {
        const updatedTask = tasks.map((task) => {
            if(task.content === data) {
                return {...task, checked: !task.checked}
            } else {
                return task;
            }
        })
        setTasks(updatedTask);
    }
    

  return (
    <section className='todo-container'>
        <header>
            <h1>Todo List</h1>
            <TodoDate />
        </header>

        <TodoForm addTask={handleFormSubmit} />

        <section className='myUnOrdList'>
            <ul>
                {
                    tasks.map((task) => {
                        return(
                            <TodoList 
                                key={task.id} 
                                data={task.content} 
                                checked={task.checked}
                                handleDelete={handleDelete} 
                                handleCheck={handleCheck}
                            />
                        )
                    })
                }
            </ul>
        </section>
        <section>
            <button className="clear-btn" onClick={handleClear}>
                Clear All
            </button>
        </section>
    </section>
  )
}

export default Todo;