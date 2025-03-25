import React, { useState } from 'react'
import "./Addtodo.css"
function AddTodo({updatelist}) {
    const[inputText,setInputText]=useState('')
return (
    <div className="add-todo">
        <input 
        className='inputtag'
        type="text"
        value={inputText}
        placeholder='add your next todo...'
        onChange={(e)=>(setInputText(e.target.value))}
        />
        <button onClick={()=>{
            updatelist(inputText)
            setInputText('')}
            }>Add</button>
    </div>
)
}

export default AddTodo