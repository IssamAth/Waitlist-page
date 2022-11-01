import React, {useState} from 'react'
import './navbarlogo.css'
import logo from '../../assets/Logo.svg'
import {GiHamburgerMenu} from 'react-icons/gi'
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

const Navbarlogo = () => {
  const [displayTopNav, setDisplayTopNav] = useState(false)
  console.log(vw);

  function testing(displayTopNav){
    if ((displayTopNav  === true) && (vw < 1024)) {
      return "topnav";
    }  if ((displayTopNav === false) && (vw < 1024)) {
      return "topnavhide";
    } else if ((displayTopNav === true) && (vw >= 1024)) {
      return "newclass";
    } else if ((displayTopNav === false) && (vw >= 1024)) {
      return "newclass";
    }

    console.log("just to prove u wrong")
    displayTopNav = false;
  }

  return (
    <div id='navbarlogo'>
      <div className="logo-menu">
        <div className='logo'>
          <img src={logo} alt="" /> 
        </div>
        <a href="#" class="icon" onClick={() => setDisplayTopNav(!displayTopNav)}>
            <GiHamburgerMenu size = '28'/>
        </a>
      </div>
        <nav className={testing(displayTopNav)}>
          <ul className="mylinks">
            <li><a href="#">Features</a></li>
            <li><a href="#">Affiliates</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Communities</a></li>
            <li className='join-list'><a href="#">Join Waitlist</a></li>
          </ul>
        </nav>
    </div>
  )       
}

export default Navbarlogo