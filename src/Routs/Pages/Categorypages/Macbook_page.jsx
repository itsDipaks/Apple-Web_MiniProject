import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getmacbookdata } from '../../../Apis/api'
import styles from "./products.module.css";
import mac from "../images/mackbookimg.PNG"
const Macbook = () => {
  const [macbook,setmacbook]=useState([])

  useEffect(()=>{
    getmacbookdata().then((res)=>
 
    setmacbook(res)
    )
  },[])

  return (
    <>
    <img style={{width:"100%"}} src={mac} alt="" />
       <div className={styles.listdiv}>
        {macbook?.map((el)=>{return(
        <div className={styles.itemdiv}>
          <h2>{el.title}</h2>
          <img src={el.img}  className={styles.imglist} alt="" />
          <h3>
              <span>Price : </span>
              {el.price}
            </h3> 
                      <button className={styles.itembtn}>Add to Cart</button>
          </div>
      )})}

    </div>
    
    </>
    
  )
}

export default Macbook