import React from "react";
import './index.css';
import { NavLink } from "react-router-dom";
import { useState } from "react";
function Link(){
    const [set,setData]=useState(false);
    function toggle(){
        setData(current=>!current)
    }
    return(
        <>
            <div className="link" style={{
                // display:set?"none":"block"
            }}>
                 
                <div className="left" style={{paddingLeft:"10px"}}>
                  <a href="#">  Weather<span className="Info">Info</span></a>
                </div>
               <div className="line" onClick={toggle}
               style={{
                marginTop:set?"":""
               }}>
                <div className="d"
                s
                style={{transform:set?"":"rotate(-45deg)",
                marginTop:set?"":""

               }}></div>
                <div className="d"
                style={{
                    display:set?"block":"none",
                  
                }}></div>
                <div className="d"
                style={{
                    transform:set?"":"rotate(45deg)",
                    marginTop:set?"":"4px"
                    // ,transform:"rotate(45deg)",
                    // marginTop:"-3px"
                }}></div>
               </div>
                
               <div className="mainLink"  
               style={{
                display:set?"none":"block"
               }}
               >
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