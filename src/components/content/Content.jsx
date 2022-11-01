import React from 'react'
import './content.css'
import Illustration from '../../assets/Illustration.png'

const Content = () => {
  function choseClass(){
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    if(vw >= 1024) {
      return "show-class";
    } else {
      return "hide-class"
    }
  }
  return (
    <section className='content'>
      <div className="h4-h1">
        <h4>We are now allowing early-access for users. <a className='learn'>Learn more.</a></h4>
        <h1>Build a highly engaged community with no effort.</h1>
        <p>Commune offers the tools you need to build a highly engaged community with little to no effort. Simply setup your Commune workspace, and manage everything from members to content from one central dashboard.</p>
      </div>
      <div className="image">
        <img src={Illustration} alt="illustration" />
      </div>
    </section>
  )
}

export default Content