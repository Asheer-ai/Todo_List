import React, { useContext } from 'react';
import Todo from '../Todo/Todo';
import Todocontext from '../../Context/Todocontext';
import './Todo.css';

function TodoList() {
    const { list, setList } = useContext(Todocontext);

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
                        changeFinished={(isFinished) => {
                            const updatedList = list.map(t => {
                                if (t.id === todo.id) {
                                    return { ...t, finished: isFinished };
                                }
                                return t;
                            });
                            setList(updatedList);
                        }}
                        onDelete={() => {
                            const updatedList = list.filter(t => t.id !== todo.id);
                            setList(updatedList);
                        }}
                        onEdit={(todoText) => {
                            const updatedList = list.map(t => {
                                if (t.id === todo.id) {
                                    return { ...t, todoData: todoText };
                                }
                                return t;
                            });
                            setList(updatedList);
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

export default TodoList;
