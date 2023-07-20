import { useState } from 'react'
import './App.css'
import PostsList from './PostsList'
import NewPost from './NewPost'


function App() {

  return (
    <>
    <NewPost></NewPost>
    <PostsList></PostsList>
    </>
  )
}

export default App
