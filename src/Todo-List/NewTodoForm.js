import React, {useState} from 'react';
import Todo from './Todo';

const NewTodoForm = ({addTodo, uuid}) => {

    const initalState = {
        text : '',
        key: '',
        id: ''
    }

    const [value, setValue] = useState(initalState)


    const handleChange = e => {
        const {name, value} = e.target;
        setValue(data => ({
            ...data, [name] : value
        }))
        console.log(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({...value , id: uuid(), key: uuid()})
        setValue(initalState);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            onChange={handleChange}
            id="text"
            name="text"
            value={value.text}
            />
            <button>Add new Todo</button>
        </form>
    )
}

export default NewTodoForm;