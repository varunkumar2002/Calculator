import React,{useEffect, useState} from 'react';
function Calculator(){
    const [displayValue,setDisplayValue] = useState('');
    
    const handleButtonClick = (value)=>{
        setDisplayValue(displayValue+value);
    };

    const calculateResult = ()=>{
        try{
            const result = eval(displayValue);
            setDisplayValue(result);
        }
        catch(error){
            console.error('Error:',error);
        }
    };

    const clearDisplay = ()=>{
        setDisplayValue('');
    };
    const clearCharacter =()=>{
        setDisplayValue(displayValue.slice(0,-1));
    }

    const handleKeyDown = (Event)=>{
        const {key} = Event;
    if(/[0-9+\-*/.=]|Enter|Backspace|Delete/.test(key)){
        Event.preventDefault();
        switch(key){
            case 'Enter':
                calculateResult();
                break;
            case 'Backspace':
                clearCharacter();
                break;
            case 'Delete':
                clearDisplay();
                break;
            default:
                handleButtonClick(key);
                break;
        }
    }
    };
    useEffect(()=>{
        document.addEventListener('keydown',handleKeyDown);
        return ()=>{
            document.removeEventListener('keydown',handleKeyDown);
        };
    });
    return(
        <div className='calculator'>
            <input type='text' value={displayValue} readOnly/>
            <div className='buttons'>
                <button onClick={()=>handleButtonClick('1')}>1</button>
                <button onClick={()=>handleButtonClick('2')}>2</button>
                <button onClick={()=>handleButtonClick('3')}>3</button>
                <button className='operation' onClick={()=>handleButtonClick('+')}>+</button>
                <button onClick={()=>handleButtonClick('4')}>4</button>
                <button onClick={()=>handleButtonClick('5')}>5</button>
                <button onClick={()=>handleButtonClick('6')}>6</button>
                <button className='operation' onClick={()=>handleButtonClick('-')}>-</button>
                <button onClick={()=>handleButtonClick('7')}>7</button>
                <button onClick={()=>handleButtonClick('8')}>8</button>
                <button onClick={()=>handleButtonClick('9')}>9</button>
                <button className='operation' onClick={()=>handleButtonClick('*')}>*</button>
                <button onClick={()=>handleButtonClick('0')}>0</button>
                <button onClick={clearDisplay}>AC</button>
                <button className='equals' onClick={calculateResult}>=</button>
                <button className='operation' onClick={()=>handleButtonClick('/')}>/</button>
            </div>
        </div>
    );
}
export default Calculator;