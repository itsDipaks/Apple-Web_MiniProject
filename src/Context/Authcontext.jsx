import React, { createContext } from 'react'
import { useState } from 'react'
export const Authcontext=createContext()

const Authcontextfunction = ({children}) => {
const [isAuth,setisAuth]=useState(false)
const [email,setemail]=useState("")
const [token,settokan]=useState(null)

const loginuser=(email,token)=>{

    setemail(email)
    settokan(token)
    setisAuth(true)
}
const logout=()=>{
    setemail("")
    settokan(null)
    setisAuth(false)
}

// const toggle=()=>{
//     setisAuth(!isAuth)
// }

  return (
    <div>
<Authcontext.Provider value={{loginuser,logout,isAuth,email,token}}> 
{children}
</Authcontext.Provider>

    </div>
  )
}

export default Authcontextfunction