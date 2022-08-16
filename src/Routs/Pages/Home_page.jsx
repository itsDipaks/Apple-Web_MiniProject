import React from 'react'
import styles from "../Pages/pages.module.css"
import Homepimg from "../images/Homepimg.png"
import Homeimg2 from "../images/homeimg2.png"
const Home = () => {
  return (<>




    <div className={styles.home_img}>
<img  src={Homepimg} alt="appleforclg" />
<img src={Homeimg2} alt="404" />
    </div>
    </>
  )
}

export default Home