import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {

  const [ position , setPosition ] = useState(-360)

  const handleClick = () => {
    if(position !== 0 ){
      setPosition(0)
    }else{
      setPosition(-360)
    }
  }
  return (
    <div className='Sidebar'  style={{ left :  `${position}px` , background : "white"  }}  >
       {/* <button id='cross' ><h2>&#x2716;</h2></button> */}
      <h4>Company Name</h4>
      <form>
        <input type="search" name="search" id="serach" placeholder='Search Module' />
      </form>
      <h5> CLIENT MASTER </h5>
      <div className="side-links">
        <NavLink to="view" >View Clients</NavLink>
        <NavLink to="add" > Add clients </NavLink>
      </div>

      <br /><br /><br /><br />

      <button className="open-slidebar" onClick={handleClick} >Menu</button>
    </div>

  )
}

export default Sidebar;