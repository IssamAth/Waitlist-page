import React, {useState} from 'react'
import './navbarlogo.css'
import logo from '../../assets/Logo.svg'
import {GiHamburgerMenu} from 'react-icons/gi'
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>



const Navbarlogo = () => {
  const [displayTopNav, setDisplayTopNav] = useState(false)

  function testing(displayTopNav){
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    if ((displayTopNav  === true) && (vw < 1024)) {
      console.log("menu shown");
      return "topnav";
    }  if ((displayTopNav === false) && (vw < 1024)) {
      console.log("menu hidden");
      return "topnavhide";
    } else if ((displayTopNav === true) && (vw >= 1024)) {
      console.log("menu showns2");
      return "topnavhide";
    } else if ((displayTopNav === false) && (vw >= 1024)) {
      console.log("vp is big");
      return "topnavhide";
    }

    console.log("just to prove u wrong")
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