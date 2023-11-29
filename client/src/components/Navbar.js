import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../context/Usercontext';
import "../components/css/nav.css"

export const Navbar = () => {

  const {loggedin, logout, user} = useContext(Authcontext)        

  return (
    <div className='navbar' >
      <div >To - <samp style={{fontWeight:"500", fontSize:"17px" }} >We</samp></div>
      {loggedin ? (
        <div className='userin' >
          {user && user.username}
          <button className='btn' onClick={logout}>Logout</button>
        </div>
      ) : (
        <div className='userout' >
          <Link to={"/Home"} className='one' >Home</Link>
          <Link to={"/"} className='one' >About</Link>
          <Link to="/register" className='register' >Register</Link>
          <Link to="/login" className='login' >Login</Link>
        </div>
      )}
    </div>
  );
};


