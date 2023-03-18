import React, { useEffect ,useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import "../style/dashboard.css";

const Dashboard = () => {
  

    useEffect(() => {
        document.title = "Dashboard"
    })
  return (
    <div className='Dashboard'   >
        <Sidebar  />
        <div className='p-2'>
            <Outlet />

            
        </div>
    </div>
  )
}

export default Dashboard