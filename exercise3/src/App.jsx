import { useEffect, useState } from 'react'
import './App.css'

function App() {
  let [counter1, setCounter1] = useState(0)
  let [counter2, setCounter2] = useState(0)
  useEffect(()=> {alert(`the value of counter 1 is ${counter1}`)},[counter1])

  return (
    <>
    <button onClick={()=>setCounter1(counter1+1)}>increase counter 1</button>
    <button onClick={()=>setCounter2(counter2+1)}>increase counter 1</button>
    </>
  )
}

export default App
