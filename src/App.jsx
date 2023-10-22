import React, { useReducer } from 'react'
import './App.css'
import DigitButton from './DigitButton'

export const ACTION = {
    ADD_DIGIT:  "add-digit",
    CHOOSE_OPREATION: "choose-opreation",
    CLEAR: "clear",
    DELETE_DIGIT: "delete-digit",
    EVALUTE: "evalute"
}

function reducer (state,{type,payload}) {
  switch(type){
    case ACTION.ADD_DIGIT:
      return{
        ...state,
        currentOperand:`${state.currentOperand || ""}${payload.digit}`
      }
  }
}

function App() {
  const [{currentOperand,previousOperand,operation}, dispatch] = useReducer(reducer,{})
  return (
    <div className='grid-claculator'>
      <div className='output'>
        <div className='previous-operand'>{previousOperand}{operation}</div>
        <div className='current-operand'>{currentOperand}</div>
      </div>
      <button className='span-two'>AC</button>
      <button>DEL</button>
      <DigitButton digit="÷" dispatch={dispatch}/>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button className='span-two'>=</button>
    </div>
  )
}

export default App