import React from "react";
import { useContext } from "react";
import {NavLink} from "react-router-dom";
import { Authcontext } from "../Context/Authcontext";
import styles from "./navbar.module.css";
const Navbar = () => {
  // const links = [
  //   {
  //     path: "/",
  //     title: "Home",
  //   },
  //   {
  //     path: "/Allcategory",
  //     title: "All Products",
  //   },
  //   {
  //     path: "/Iphone",
  //     title: "Iphone",
  //   },
  //   {
  //     path: "/Ipad",
  //     title: "Ipad",
  //   },
  //   {
  //     path: "/Macbook",
  //     title: "Macbook",
  //   },
  //   {
  //     path: "/About",
  //     title: "About",
  //   },
  //   {
  //     path: "/Login",
  //     title: "Login",
  //   },
  //   {
  //     path: "/Cart",
  //     title: "Cart",
  //   },
  //   {
  //     path: "/Admin",
  //     title: "Admin",
  //   },
  // ];



  const {isAuth,email,logout}=useContext(Authcontext)
  return (
    <nav className={styles.navbar}>
      <ul className={styles.ulnavlist}>
        {/* {links.map((link) => (
          <p className={styles.list}>
            <NavLink
              to={link.path}
              className={({isActive}) =>
                isActive ? styles.activelink : styles.deactivelink
              }
            >
              {link.title}
            </NavLink>
          </p>
        ))} */}
{/* ................. */}
        <NavLink
          to="/"
          className={({isActive}) =>
            isActive ? styles.activelink : styles.deactivelink
          }
        >
          Home
        </NavLink>
 {/* /..................       ................... */}
{/* ................. */}
        <NavLink
          to="/Allcategory"
          className={({isActive}) =>
            isActive ? styles.activelink : styles.deactivelink
          }
        >
          Allcategory
        </NavLink>
 {/* /..................       ................... */}
{/* ................. */}
        <NavLink
          to="/Iphone"
          className={({isActive}) =>
            isActive ? styles.activelink : styles.deactivelink
          }
        >
          Iphone
        </NavLink>
 {/* /..................       ................... */}
{/* ................. */}
        <NavLink
          to="/Ipad"
          className={({isActive}) =>
            isActive ? styles.activelink : styles.deactivelink
          }
        >
          Ipad
        </NavLink>
 {/* /..................       ................... */}
{/* ................. */}
        <NavLink
          to="/Macbook"
          className={({isActive}) =>
            isActive ? styles.activelink : styles.deactivelink
          }
        >
          Macbook
        </NavLink>
 {/* /..................       ................... */}
{/* ................. */}
        <NavLink
          to="/About"
          className={({isActive}) =>
            isActive ? styles.activelink : styles.deactivelink
          }
        >
          About
        </NavLink>
 {/* /..................       ................... */}

{/* ................. */}
        <NavLink
          to="/Cart"
          className={({isActive}) =>
            isActive ? styles.activelink : styles.deactivelink
          }
        >
          Cart
        </NavLink>
 {/* /..................       ................... */}
{/* ................. */}
        <NavLink
          to="/Admin"
          className={({isActive}) =>
            isActive ? styles.activelink : styles.deactivelink
          }
        >
          Admin
        </NavLink>
{/* ................. */}
{   isAuth?<button style={{marginTop:"10px",padding:"2px",backgroundColor:"black",color:"white"}} onClick={logout}>Logout</button> : <NavLink
          to="/Login"
          className={({isActive}) =>
            isActive ? styles.activelink : styles.deactivelink
          }
        >
          Login
        </NavLink>
        
 
        }
 {/* /..................       ................... */}
      </ul>
    </nav>
  );
};

export default Navbar;
