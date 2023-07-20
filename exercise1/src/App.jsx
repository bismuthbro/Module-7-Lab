import { useState } from 'react'
import {useTextInput} from './useTextInput'
import './App.css'

function App() {
  const textInput = useTextInput('')
  return (
    <>
      <input value={textInput[0]} onChange={textInput[1].onChange} type={textInput[1].type}></input>
      <h1>{textInput[0]}</h1>
    </>
  )
}

export default App
