import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../context/Usercontext';

export const Navbar = () => {

  const {loggedin, logout, user} = useContext(Authcontext)

  // const [user, setuser] = useState(null);
  // const [logged, setlogged] = useState(false);

  // // useEffect to get token
  // useEffect(() => {
  //   const token = localStorage.getItem('token');

  //   if (token) {
  //     try {
  //       const base64Url = token.split('.')[1];
  //       const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  //       const payload = JSON.parse(atob(base64));
  //       const currentuser = payload.user;

  //       setuser(currentuser);
  //     } catch (error) {
  //       console.error('Error decoding token:', error);
  //       setuser(null);
  //     }
  //   } else {
  //     setuser(null);
  //   }
  // }, [localStorage.getItem('token')]);


  // //logout handler to remove handler
  // const logouthandler = () => {
  //   localStorage.removeItem('token');
  //   setter(false)        
  // };
  

  console.log(user);

  return (
    <div>
      <div >Home {user && user.username}</div>
      {loggedin ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <div>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </div>
      )}
    </div>
  );
};







// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'

// export const Navbar = () => {

//   const [user, setuser] = useState(null)
//   const [loggedin, setloggedin] = useState(false)
  
//   const token = localStorage.getItem('token')
 
//   useEffect(()=>{

//     async function setter(){
//       console.log(token);
//       const base64Url = token.split('.')[1];
//       const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
//       const payload = JSON.parse(atob(base64));
//       const currentuser = payload.user
//       setuser(currentuser)
//       if(currentuser) setloggedin(true)
//       console.log(user);
//     }

//     setter();
//   },[localStorage.getItem('token')]);

//   const logouthandler = () =>{
//     localStorage.removeItem('token')
//     setloggedin(false)
//     setuser(null)
//   }

  
//   return (
//     <div>
//         <Link to={"/"} >Home {user && user.name} </Link>
//         {token ? <button onClick={logouthandler} >Logout</button> 
//         :<div>
//           <Link to={"/register"} >Register</Link>
//           <Link to={"/login"} >Login</Link>
//         </div>}
//     </div>
//   )
// }
