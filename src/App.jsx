
import { useContext, useReducer, useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'
import Todocontext from './Context/Todocontext'
import todoReducer from './reducers/todoReducers'

function App() {
// const [list,setList]=useState([
//   {id:1,todoData: 'todo 1',finished:false},
//   {id:2,todoData: 'todo 2',finished:true}
//  ])

const [list,dispatch]=useReducer(todoReducer,[]);

  return (
    <div id='conatiner'>
    <Todocontext.Provider value={{list}}>
      <AddTodo updatelist={(todo)=>{
        dispatch({type:'add_todo',payload:{todoText:todo}})
      }}/>
      <TodoList />
      </Todocontext.Provider>
    </div>
  )
}

export default App
