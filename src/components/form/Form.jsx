import React from 'react'
import './form.css'

const Form = () => {
  return (
    <div className='form-sec'>
        <form action="">
            <input type="email" id="email" name="email" placeholder="Enter your e-mail address" />
            <input type="submit" id='submit' value="Join Waitlist" className='submit-btn'></input>
        </form>
    </div>
  )
}

export default Form