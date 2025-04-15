import React from 'react';
import { MdCheck } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";

const TodoList = ({ data, checked, handleDelete, handleCheck}) => {
  return (
    <li className='todo-item'>
        <span className={ checked ? 'checkList' : 'notCheckList'}>
            {data}
        </span>
        <button className='check-btn' onClick={() => handleCheck(data)}>
            <MdCheck />
        </button>
        <button className='edit-btn'>
            <MdEdit />
        </button>
        <button className='delete-btn' onClick={() => handleDelete(data)}>
            <MdDeleteForever />
        </button>
    </li>
  )
}

export default TodoList;