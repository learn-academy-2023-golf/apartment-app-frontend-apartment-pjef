import React, { useRef } from 'react'
import {useNavigate } from 'react-router-dom'

const Signup = ({signup}) => {

  const formRef = useRef()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData)
    const userInfo = {
      user: { email: data.email, password: data.password, password_confirmation: data.password_confirmation}
    }
    signup(userInfo)
    navigate("/")
    e.target.reset()
  }


  return (
    <>
    <div>
    <h1 className="text-center my-5" style={{ textShadow: "0 5px 5px grey" }}>
        Sign Up 
      </h1>
      <form className="w-50 m-auto p-3 shadow-lg rounded my-5 pt-5 pb-3" ref={formRef} onSubmit={handleSubmit}>
        Email: <input className='form-control' type="email" name="email" placeholder="email" />
        <br />
        Password:{" "}
        <input className='form-control' type="password" name="password" placeholder="password" />
        <br />
        Confirm Password:{" "}
        <input
          className='form-control'
          type="password"
          name="password_confirmation"
          placeholder="confirm password"
        />
        <br />
        <input className='btn btn-dark w-100' type="submit" value="Submit" />
      </form>
    </div>
    <br />
    <div className='text-center'>
      Already registered, <a href="/login">Login</a> here.
    </div>
   
    </>
  )
}

export default Signup