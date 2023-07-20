import Post from "./Post";
import { useEffect, useState } from "react";
import axios from 'axios'


export default function PostsList() {
    let [currentPosts, setCurrentPosts] = useState([])
    useEffect(()=>{axios.get('http://localhost:3001')
    .then((response)=> setCurrentPosts(response.data))
    },[])
    return(
        <>
        {currentPosts.map((post,index)=>(<Post key={index} user={post.user} body={post.body}></Post>))}
        </>
    )
}