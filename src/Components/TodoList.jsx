import React, { useState } from 'react';
import { MdCheck } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { FaSave } from "react-icons/fa";

const TodoList = ({ id, data, checked, edit, handleDelete, handleCheck, tasks, setTasks}) => {
    const [editData, setEditData] = useState(data);
    
    // Handle Edit Function
    const handleEdit = (data,editedData) => {
        const editTask = tasks.map((task) => {
            if(task.content === data) {
                return {...task, edit: !task.edit}
            } else {
                return task;
            }
        })
        const updatedTask = tasks.map((task) => {
            if(task.id === id) {
                return {...task, content: editedData, edit: false}
            } else {
                return task;
            }
        })

        if(data === editedData){
            setTasks(editTask);
        } else {
            setTasks(updatedTask);
        }
    }

  return (
    <li className='todo-item'>
        { edit 
            ? <input 
                name='edit'
                type='text' 
                value={editData} 
                onChange={(e) => setEditData(e.target.value)} 
                />
            : <span className={ checked ? 'checkList' : 'notCheckList'}>
                {data}</span>
        }
        <button className='check-btn' onClick={() => handleCheck(data)}>
            <MdCheck />
        </button>
        <button 
            className={`edit-btn ${checked ? 'disabled' : null}`} 
            disabled={checked} 
            onClick={() => handleEdit(data,editData)}
        >
            {
                edit ? <FaSave /> :<MdEdit />
            }
        </button>
        <button className='delete-btn' onClick={() => handleDelete(data)}>
            <MdDeleteForever />
        </button>
    </li>
  )
}

export default TodoList;