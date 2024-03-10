
import React from 'react'
import './authentication.css';
import {useNavigate} from 'react-router-dom'
import appLogo from '../../assets/images/irislight.png'

const Login = () => {

  const location = useNavigate()

  const changePath = (path) =>{
    location('/' + path)
}


  return (
    <div className='regBg'>
      <div className="regBox">
        <h2 className='loginH'>Login</h2>

        <img className='appL' src={appLogo} alt="" />

        <select className='slct' name="userType" id="">
          <option value="" disabled selected>Select User Type</option>
          <option value="student">Student</option>
          <option value="institution">Institution</option>
        </select>

        <input type="text" placeholder='Enter Registered Email ID' className='inp'/>
        <input type="password" placeholder='Enter Password' className='inp'/>

        <button className='btn'>Login</button>

        
        <p className='alreadyR'>Not a User?<span onClick={() => changePath('registration')}> Register</span> </p>
      </div>

    </div>
  )
}

export default Login
