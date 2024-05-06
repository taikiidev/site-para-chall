import { useState } from 'react'
import './App.css'
import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './components/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Header/>
      <Outlet/>

    </>
  )
}

export default App
