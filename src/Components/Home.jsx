import React from 'react'
import {Link} from "react-router-dom"
const Home = () => {
  return (
  <>
  <h4>VideoCall App-Arpit❤️</h4>
  <div className="btndiv">
    <div className="btnCont">
      <Link to='/createroom'>Create a Room</Link>
      <Link to='/joinroom'>Join a Room</Link>
    </div>
  </div>
  </>
  )
}

export default Home