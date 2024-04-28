import React from 'react'
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <div>


        <ul>
              <li><Link to ="/About">About</Link></li>
              <li><Link to ="/Varieties">Varieties</Link></li>
              
        </ul>
    </div>
  )
}

export default Navbar