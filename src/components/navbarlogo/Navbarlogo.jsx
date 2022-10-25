import React from 'react'
import './navbarlogo.css'
import logo from '../../assets/Logo.svg'
import {GiHamburgerMenu} from 'react-icons/gi'
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>




const navbarlogo = () => {
  return (
    <div id='navbarlogo'>
      <div>
        <img src={logo} alt="" /> 
      </div>
      <nav class="topnav">
        <ul id="myLinks">
          <li><a href="#">Features</a></li>
          <li><a href="#">Affiliates</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Communities</a></li>
          <li><a href="#">Join Waitlist</a></li>
        </ul>
        <a href="javascript:void(0);" class="icon">
          <GiHamburgerMenu />
        </a>
      </nav>
    </div>
  )
}

export default navbarlogo