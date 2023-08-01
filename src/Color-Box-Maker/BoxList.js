import React, {useState} from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import {v4 as uuid} from 'uuid';


const BoxList = () => {
    
    const test = [
        {backgroundColor: "red", width: "100", height: "100", key: 1, id: uuid()}
    ]

    const [items, setItems] = useState(test);

    const addBox = (newBox) => {
        setItems(boxes => [...boxes,{...newBox}])
    }

    const remove = (id) => {
        setItems(boxes => boxes.filter(box => box.id !== id));
    };

  


return (
    <>
     <NewBoxForm addBox={addBox} uuid={uuid} remove={remove} />
    <div>
        {items.map(box => <Box id={box.id} backgroundColor={box.backgroundColor} width={box.width} height={box.height} key={box.key}
        remove={remove}/> )}
    </div>
    
    </>
)

}

export default BoxList;