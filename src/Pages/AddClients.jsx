import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const AddClients = () => {
  return (
    <div>
      <h1>Add client</h1>
      <br />
      <div className="links">
        {/* <NavLink to="profile-setup"  >Profile Setup</NavLink> <br /> */}
        <NavLink to="profile-setup"  >Profile Setup</NavLink> <br />
        <NavLink to="payment-setup"  >Payment Setup</NavLink> <br />
        <NavLink to="theme-setup"  >Theme Setup  </NavLink> <br />
        <NavLink to="module-setup"  >Module Setup</NavLink> <br />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default AddClients