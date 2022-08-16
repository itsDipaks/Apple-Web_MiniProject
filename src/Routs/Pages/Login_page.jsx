import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { Authcontext } from '../../Context/Authcontext'
const logindata=({email,password})=>{
  return fetch("https://reqres.in/api/login",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({email,password})
  })
}
const Login = () => {
const {loginuser,isAuth}=useContext(Authcontext)




  function handeldlogin(){
    logindata({
      "email": "eve.holt@reqres.in",
      "password": "cityslicka"
    }).then((res)=>res.json()).then((res)=>{
      console.log(res)
      loginuser("eve.holt@reqres.in",res.token)
    })
    alert("You Log in sucessfully")
   
  }

  if(isAuth){
    return <Navigate to="/"/>;
  }
  return (
    <div style={{textAlign:"center",marginTop:"30px"}}>
      {/* <form > 
<input type="email" placeholder='Enter Email : ' />
<input type="passward"  placeholder='Enter Passward : '/>
<input type="submit" />

      </form> */}
      <h1>Click Here To Login </h1>
      <button style={{marginTop:"20px",width:"100px",padding:"10px"}} onClick={handeldlogin}>login</button>
    </div>
  )
}

export default Login