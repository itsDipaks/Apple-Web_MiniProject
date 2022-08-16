import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getiphonedata } from '../../../Apis/api'
import styles from "./products.module.css";
import iphoneimg from "../images/iphoneads.png"
const Iphone = () => {
  const [phone,setphone]=useState([])

  useEffect(()=>{
    getiphonedata().then((res)=>
 
    setphone(res)
    )
  },[])
  return (

    <>
   <div>
    <img className={styles.iphone_img} src=" https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/magsafe-202203?wid=2880&hei=960&fmt=jpeg&qlt=90&.v=1644980568536" alt="" />
   </div>
    <div className={styles.listdiv}>
      
      {phone?.map((el)=>{return(
        <div className={styles.itemdiv}>
          <h2>{el.title}</h2>
          <img src={el.img} className={styles.imglist}  alt="" />
          <h3>
              <span>Price : </span>
              {el.price}
            </h3>
            <button className={styles.itembtn}>Add to Cart</button>
          </div>
      )})}

    </div>
    <img src={iphoneimg} alt="" />
    </>
  )
}

export default Iphone