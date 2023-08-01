import React, {useState} from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import {v4 as uuid} from 'uuid';


const TodoList = () => {
    const initalValue = [
        {id: uuid(), key: uuid(), text: "yeah"},
        {id: uuid(), key: uuid(), text: "wash my car"}
    ];

    const [todos, setTodo] = useState(initalValue)

    const addTodo = (newTodo) => {
        setTodo(todos => [...todos, {...newTodo}])
    }

    const remove = (id) => {
        setTodo(items => items.filter(todo => todo.id !== id))
    }

    return (
        <>
        <NewTodoForm addTodo={addTodo} uuid={uuid} />
        <div>
            {todos.map(item => <Todo id={item.id} text={item.text} key={item.key} remove={remove}/>)}
        </div>
        </>
        
        
    )
}

export default TodoList;