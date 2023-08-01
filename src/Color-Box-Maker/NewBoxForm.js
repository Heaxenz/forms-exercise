import React, {useState} from 'react';
import { isValidInputTimeValue } from '@testing-library/user-event/dist/utils';


const NewBoxForm = ({addBox, uuid}) => {


    const initalState = {
        backgroundColor: "",
        height: "",
        width: ""
    }
    const [box, setBox] = useState(initalState)
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setBox(data => ({
            ...data, [name] : value
        }))

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({...box, id: uuid(), key: uuid()})
        setBox(initalState)
    }
 

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="backgroundColor">Color</label>
            <input
            type="text"
            name="backgroundColor"
            id="backgroundColor"
            value={box.backgroundColor}
            onChange={handleChange}
            />

            <label htmlFor="height">Height</label>
            <input
            type="text"
            name="height"
            id="height"
            value={box.height}
            onChange={handleChange}
            />


            <label htmlFor="width">Width</label>
            <input
            type="text"
            name="width"
            id="width"
            value={box.width}
            onChange={handleChange}
            />
            <button>Create New Box</button>

        
        </form>
    )
}

export default NewBoxForm;