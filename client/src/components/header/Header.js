import React from 'react'
import "./Header.css";
export default function Header() {
  return (
    <div className='header'>
        <div className='headerTitles'>
            <span className='headerTitlesm'>React & Node</span>
            <span className='headerTitlelg'>Blog</span>
        </div>
        <img className="headerImage" src='Images/bus.jpg' alt='bus'/>
    </div>
  )
}
