import {useTextInput} from './useTextInput'
import axios from 'axios'
export default function NewPost() {
    let {inputProps:nameProps} = useTextInput()
    let {inputProps:postProps} = useTextInput()
    let handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001', {user:nameProps.value, body:postProps.value})
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <p>Your Name:</p>
            <input type='text' onChange={nameProps.onChange} value={nameProps.value}></input>
            <p>Write your post here:</p>
            <input type='text' onChange={postProps.onChange} value={postProps.value}></input>
            <button type='submit'>Post</button>
        </form>
        </>

    )
}