import React from 'react'


const Path = (props) => {
    const {id, onClick, d, fill, stroke, strokeWidth, fillColors, onFill, index} = props; 
    
    return (
        <path  
            id={props.id} 
            //onClick={props.onFill(index)} 
            d={props.d} 
            //fill={props.fillColors[index]} 
            stroke={props.stroke} 
            strokeWidth={props.strokeWidth} 
            />)
}

export default Path