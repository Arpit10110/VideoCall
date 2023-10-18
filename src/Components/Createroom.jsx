import React from 'react'
import { useState } from 'react'
import {useNavigate} from "react-router-dom"
import "../Style/CreateRoom.css"
const Createroom = () => {
    const Navigate=useNavigate();
    const [CroomId,setCroomId]=useState("");
    const Submited=()=>{
        Navigate(`/room/${CroomId}`)
    }
  return (
    <>
    <h4>VideoCall App-Arpit❤️</h4>
    <div className="RoomDiv">
    <div className="Roomcont">
      <input className='Inputs' type="text" placeholder='Create a Room Id' value={CroomId} onChange={(e)=>{
        setCroomId(e.target.value);
      }} />
      <button className='subbtna' onClick={Submited}>Submit</button>
    </div>
  </div>
    </>
  )
}

export default Createroom