import React, { Component } from 'react'
class Validate extends Component {
    render(){
        let validationMessage = <p>Text is too shorts <span>🩳 🩳</span></p>;
        if(this.props.inputLength>5){
            validationMessage = <p>Text is long enough <span>🧖‍♀️</span></p>
        }
    return (
        <div>
            {validationMessage}
        </div>
    )
    }
}

export default Validate