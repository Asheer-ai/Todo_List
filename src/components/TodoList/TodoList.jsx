import React, { useContext } from 'react';
import Todo from '../Todo/Todo';
import Todocontext from '../../Context/Todocontext';
import './Todo.css';

function TodoList() {
    const { list, setList } = useContext(Todocontext);

    function onFinished(todo,isFinished){
        const updatedList = list.map(t => {
            if (t.id === todo.id) {
                return { ...t, finished: isFinished };
            }
            return t;
        });
        setList(updatedList);
    }
    
    function onDelete(todo){
        const updatedList = list.filter(t => t.id !== todo.id);
        setList(updatedList);
    }

    function onEdit(todo,todoText){
        const updatedList = list.map(t => {
            if (t.id === todo.id) {
                return { ...t, todoData: todoText };
            }
            return t;
        });
        setList(updatedList);
    }

    return (
        <div className="todo-list-container">
            <h2 className="todo-list-title">Todo List</h2>
            <div className="todo-list">
                {list.length > 0 && list.map((todo) => (
                    <Todo 
                        key={todo.id} 
                        id={todo.id} 
                        isFinished={todo.finished} 
                        todoData={todo.todoData} 
                        changeFinished={(isFinished)=>onFinished(todo,isFinished)}
                        onDelete={() => onDelete(todo) }
                        onEdit={(todoText) => onEdit(todo, todoText)}
                    />
                ))}
            </div>
        </div>
    );
}

export default TodoList;
