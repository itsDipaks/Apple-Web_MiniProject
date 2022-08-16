import React from 'react'
import { Routes,Route } from 'react-router-dom'
import PrivateRouts from '../components/PrivateRouts'
import About from './Pages/About_page'
import Admin from './Pages/Admin_page'
import Cart from './Pages/Cart_page'
import Allcategory from './Pages/Categorypages/Allcategory_page'
import Allcategory_page from './Pages/Categorypages/Allcategory_page'
import Ipad from './Pages/Categorypages/Ipad_page'
import Iphone from './Pages/Categorypages/Iphone_page'
import Macbook from './Pages/Categorypages/Macbook_page'

import Home_page from './Pages/Home_page'
import Login from './Pages/Login_page'
const All_Routs = () => {
  return (
 <div>
  <Routes>
    <Route path='/' element={<Home_page/>}/>
    <Route path='/Allcategory' element={<PrivateRouts><Allcategory_page/></PrivateRouts>}/>
      <Route path='/Iphone' element={<PrivateRouts><Iphone/></PrivateRouts>}/>
    <Route path='/Ipad' element={<PrivateRouts><Ipad/></PrivateRouts>}/>
    <Route path='/Macbook' element={<PrivateRouts><Macbook/></PrivateRouts>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Cart' element={<PrivateRouts><Cart/></PrivateRouts>}/>
    <Route path='/Admin' element={<PrivateRouts><Admin/></PrivateRouts>}/>
  </Routes>
 </div>
  )
}

export default All_Routs