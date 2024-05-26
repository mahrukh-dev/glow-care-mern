import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar">
        <Link to={'/addproducts'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">Add Products</div>
        </Link>
    </div>
  )
}

export default Sidebar