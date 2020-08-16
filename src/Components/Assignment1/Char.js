import React from 'react'

function Char(props) {
    let style={
        display:"inline-block",
        padding: "8px",
        margin: "8px",
        border: "2px solid #000",
        textAlign: "center",
        width:"40px"        
    }
    return (
        <div style={style} onClick={props.click}>
            {props.ch}
        </div>
    )
}

export default Char
