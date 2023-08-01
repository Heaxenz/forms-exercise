import React from 'react';



const Todo = ({text, id, key, remove}) => {
    
    const handleRemove = () => remove(id);


    return (
        <div>
            <div id={id}>{text}</div>
            <button onClick={handleRemove}>X</button>
        </div>
    )
}

export default Todo;