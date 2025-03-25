
import { useContext, useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'
import Todocontext from './Context/Todocontext'

function App() {
const [list,setList]=useState([
  {id:1,todoData: 'todo 1',finished:false},
  {id:2,todoData: 'todo 2',finished:true}
 ])

  return (
    <div id='conatiner'>
    <Todocontext.Provider value={{list,setList}}>
      <AddTodo updatelist={(todo)=>setList([...list,{id:list.length+1,todoData:todo,finished:false}])}/>
      <TodoList />
      </Todocontext.Provider>
    </div>
  )
}

export default App
