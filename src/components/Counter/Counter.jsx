import React, {useState} from 'react'
// import { useState } from 'react/cjs/react.production.min'

export const Counter = () => {

    const [counter, setCounter] = useState(0);
    const [color, setColor] = useState();
    const [txtClr, setTxtClr] = useState();

    const handleIncrement = () => {
        setCounter(s => s + 1);
    }

    const handleDecrement = () => {
        setCounter(s => s - 1);
    }

    const settingTextClr = () => {
        if(color<'#aaaaaa'){
            setTxtClr('#ffffff');
        }
        else{
            setTxtClr('#000000')
        }
    }

  return (
    <div style={{backgroundColor: color}}>
        <button onClick={handleIncrement}>Plus</button>
        <h1 style={{color: txtClr}}>{counter}</h1>
        <button onClick={handleDecrement}>Minus</button>
        <hr />
        <input type="color" name="" onChange={e => {setColor(e.target.value); settingTextClr()}} id="" />
    </div>
  )
}