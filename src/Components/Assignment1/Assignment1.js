import React,{useState} from 'react'
import Validate from './Validate';
import Char from './Char';

const Assignment1 = () => {
    const [inputValue, setInputValue] = useState(``);

    const handleInputChange = (event)=>{
        setInputValue(event.target.value);
    }

    const charArray = inputValue.split('').map((ch,index)=>{
        return <Char key={index} ch={ch} click={()=> handleDeletion(index)} />
    });

    const handleDeletion = (index) => {
        const currentInput = inputValue.split('');
        currentInput.splice(index,1);
        const updateText = currentInput.join('')
        setInputValue(updateText);
    }

    return (
        <div>
            <input value={inputValue} onChange={(event)=> handleInputChange(event)}/>
            <Validate inputLength={inputValue.length}/>
            {charArray}
        </div>
    )
}

export default Assignment1
