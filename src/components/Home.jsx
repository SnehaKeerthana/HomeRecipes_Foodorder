import React from 'react';
import { Link } from 'react-router-dom';
import STYLE from "./CSS/home.module.css";
const Home = () => {
  return (
    <main className={STYLE.container}>
        
            <div id={STYLE.part2}><h2>Welcome to Home Recipes</h2>
            <div><p>Come for a drink, stay for a meal!!!!!!!!!!!!!!!!</p>
            <p>Nothing brings people together like good food.</p>
            </div>
            <div id={STYLE.part1}>
           <aside><Link className={STYLE.part3} to={'/signup'} >Signup</Link></aside> 
           <aside><Link className={STYLE.part3} to={'/login'} >Login</Link></aside> 
            </div>
            
            </div>
    </main>     
  );
}

export default Home;
