import { useState } from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import './App.css'
import Home from './Home'
import Posts from './Posts'
import Dashboard from './Dashboard'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/posts' element={<Posts/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
    </Routes>
    </>
  )
}

export default App
