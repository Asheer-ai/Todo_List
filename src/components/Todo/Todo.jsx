import React, { useContext, useState } from 'react'
import Todocontext from '../../Context/Todocontext';
import "./Todo.css"

function Todo({todoData,isFinished,changeFinished,onDelete,onEdit}) {
  
  const [finished,setFinished]=useState(isFinished)
  const [isEditing,setIsEditing]=useState(false);
  const [editText,setEdittext]=useState('');
  return (
    <div className="todo-list">
    <div className='todo-item'>
        <input type="checkbox" checked={finished} onChange={(e)=>{
          setFinished(e.target.checked)
          changeFinished(e.target.checked)
          }}/>
        {(isEditing)? <input type='text' value={editText} onChange={e=>setEdittext(e.target.value)}/>:<span>{todoData}</span>}
        <button className='edit-btn' onClick={()=>{
          setIsEditing(!isEditing)
          onEdit(editText)
        }}> {(!isEditing) ? 'Edit':'Save'} </button>
        <button className='delete-btn' onClick={onDelete}> Delete </button>
    </div>
    </div>
  )
}

export default Todo