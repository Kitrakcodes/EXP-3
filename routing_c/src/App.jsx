import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Profile(){
  return(
    <div>
      <marquee loops='S'>
        <h1>Welcome to my Profile</h1>
      </marquee>
      <h1>Kartik Dogra</h1>
      <h2>Full Stack Dev</h2>
    </div>
  )
}

function Dashboard(){
  return(
    <div>
      <h1>Skills</h1>
      <h2>HTML</h2>
      <h2>CSS</h2>
    </div>
  )
}


function App() {
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>

      <a href="/profile"><button>Go To Profile</button></a>
      <a href="/Dashboard"><button>Go To Dashboard</button></a>
    </>
  )
}

export default App