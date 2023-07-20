import { useState } from 'react'
import './App.css'
import { createContext } from 'react'
export let emojiContext = createContext()
import {Emoji} from './Emoji'

function App() {
  let [emojiState, setEmojiState] = useState(true)
  return (
    <>
    <emojiContext.Provider value={{emojiState, setEmojiState}}>
      <Emoji></Emoji>
    </emojiContext.Provider>
    </>
  )
}

export default App
