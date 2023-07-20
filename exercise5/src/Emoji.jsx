import { useContext } from "react";
import { emojiContext } from "./App";

export function Emoji(props) {
    let {emojiState, setEmojiState} = useContext(emojiContext)


    return(
        <>
        <img src={emojiState ? 'https://em-content.zobj.net/source/animated-noto-color-emoji/356/smiling-face-with-smiling-eyes_1f60a.gif' : 'https://www.cambridge.org/elt/blog/wp-content/uploads/2019/07/Sad-Face-Emoji.png'}></img>
        <button onClick={()=>(setEmojiState(!emojiState))}>Change Emoji</button>
        </>
    )
}