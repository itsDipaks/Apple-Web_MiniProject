import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getipaddata } from '../../../Apis/api'
import ipad1 from "../images/ipad.png"
import styles from "./products.module.css";

const Ipad = () => {
  const [ipad,setipad]=useState([])

  useEffect(()=>{
    getipaddata().then((res)=>
 
    setipad(res)
    )
  },[])
  return (<>











    <div className={styles.listdiv}>
   
      {ipad?.map((el)=>{return(
        <div  className={styles.itemdiv}>
          <h2>{el.title}</h2>
          <img className={styles.imglist} src={el.img} alt="" />
          <h3>
              <span>Price : </span>
              {el.price}
            </h3>
            <button className={styles.itembtn}>Add to Cart</button>
          </div>
      )})}

    </div>
    <img src={ipad1} alt="dd" />
    </>
  )
}

export default Ipad