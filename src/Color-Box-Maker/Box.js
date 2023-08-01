import React from 'react';

const Box = ({backgroundColor, height, width, id, remove}) => {
    const handleRemove = () => remove(id);
    return (
        <div>
        <div style={{display: 'inline-block',backgroundColor , width : 
        `${width}px`, height: `${height}px`, id: id}}>
        </div>
        <button 
        onClick={handleRemove}
        style={{display:'block',margin: '0 auto'}}>X</button>
        </div>
    )
}

export default Box;