import React from "react";
import './index.css';
import { NavLink } from "react-router-dom";
function Link(){
    return(
        <>
            <div className="link">
                 
                <div className="left">
                  <a href="#">  Weather<span className="Info">Info</span></a>
                </div>
               <div className="mainLink">
               <ul>
                    <li> <NavLink to="/contact">Contact</NavLink></li>
                    <li> <NavLink to="/about">About</NavLink></li>
                    <li> <NavLink to="/search">Search</NavLink></li>
                    {/* <li> <NavLink to="/blog">Blog</NavLink></li> */}
                    <li> <NavLink to="/">Home</NavLink></li>           
                </ul>
               </div>
            </div>
    
        </>
    )
}
export default Link;