import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import useAdmin from '../../hooks/useAdmin';
const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile">
    <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      {/* <!-- Page content here --> */}
      <h2 className='text-2xl font-bold text-purple-500'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
    
    </div> 
    <div class="drawer-side">
      <label for="dashboard-sidebar" class="drawer-overlay"></label> 
      <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
        {/* <!-- Sidebar content here --> */}
        <li><Link to="/dashboard">My Items</Link></li>
        <li><Link to="/dashboard/review">My Reviews</Link></li>
        <li><Link to="/dashboard/history">My History</Link></li>
         <li><Link to="/dashboard/users">All Users</Link></li>
      </ul>
    
    </div>
  </div>
  )
}

export default Dashboard