import React from "react";
import { HashRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Search  from "./Search";
function App(){
    return(
        <>
            <HashRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    {/* <Route exact path="/blog" element={<Blog />} /> */}
                    <Route exact path="/search" element={<Search />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/contact" element={<Contact />} />
                </Routes>
            </HashRouter>
        </>
    )
}
export default App;