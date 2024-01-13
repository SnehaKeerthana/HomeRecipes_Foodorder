import React from 'react';
import { Link } from 'react-router-dom';
import STYLE from "./CSS/nav.module.css";
const Nav = () => {
  return (
   <main>
    <nav>
      <div className={STYLE.box}><Link className={STYLE.test} to={"/"}>Home</Link></div>
      <div className={STYLE.box}><Link className={STYLE.test} to={"/placeorder"}>Place Order</Link></div>
      <div className={STYLE.box}><Link className={STYLE.test}  to={"/yourorders"}>Your orders</Link></div>
    </nav>
   </main>
  )
}

export default Nav;
