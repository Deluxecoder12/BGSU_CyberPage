import React from 'react';
import {NavLink} from 'react-router-dom';
import './Sidebar.css'

function Sidebar(){

   
    return (
    <div className='sidebar'>
    <ul>
     <li>
     <NavLink to='/summer-camp' className={({isActive}) => (isActive  ? 'active-link' : '')} >Summer camp</NavLink>
     </li>
     <li>
       <NavLink to='/summer-camp2024' className={ ({isActive}) => (isActive ? 'active-link' : '')}>Summer camp 2024</NavLink>
     </li>
     <li>
       <NavLink to='/summer-camp2025' className={({ isActive }) => (isActive ? 'active-link' : '')}  >Summer camp 2025</NavLink>
     </li>
    </ul>
   </div>
    )
}

export default Sidebar;