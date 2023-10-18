import React from 'react'
import Home from './Components/Home'
import Createroom from './Components/Createroom.jsx'
import Joinroom from './Components/joinroom.jsx'
import JoinIt from './Components/JoinIt.jsx'
import "./Style/Home.css"
import {Routes,Route} from "react-router-dom"
const App = () => {
  return (
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/room/:roomId' element={<JoinIt/>} />
    <Route path='/createroom' element={<Createroom/>} />
    <Route path='/joinroom' element={<Joinroom/>} />
    </Routes>
  )
}

export default App