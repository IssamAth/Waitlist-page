import React from 'react'
import './navbarlogo.css'
import logo from '../../assets/Logo.svg'
import {GiHamburgerMenu} from 'react-icons/gi'
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>


function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


const navbarlogo = () => {
  return (
    <div id='navbarlogo'>
      <div className="logo-menu">
        <div className='logo'>
          <img src={logo} alt="" /> 
        </div>
        <a href="#" class="icon" onClick={myFunction}>
            <GiHamburgerMenu size = '28'/>
        </a>
      </div>
      <nav class="topnav">
        <ul id="myLinks">
          <li><a href="#">Features</a></li>
          <li><a href="#">Affiliates</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Communities</a></li>
          <li><a href="#">Join Waitlist</a></li>
        </ul>
      </nav>
    </div>
  )       
}

export default navbarlogo