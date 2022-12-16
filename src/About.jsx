import React from 'react'
import { NavLink } from 'react-router-dom';
import './index.css'
import Link from './Link';
const About = () => {
  return (
    <div>
    <Link />
        <div className='about'>
          <div className='aboutMain'>
            <h1>what you get from this website</h1>
            <h3>This website is all about climate and weather information .It will gave you all information .
            Here you will find all kind of information related to weather/Climate.In <NavLink to="/">Home</NavLink> component you will find Indian Climate/Weather information .There you get the information related to temperature ,gust,UV ray,wind_degree,wind_direction,wind_speed ,Wind_speed in kph,mph and many more.
            At the bottom you will find information related to every hour temperature of India, an image,Time .This website is fully updated and every 5 min it will gave you the fresh information  
            </h3>
            <h3>Another component <NavLink to="/search">Search</NavLink> there your find search button the main thing is that you can get information related to  climate/weather of every place.</h3>
            <h3>Another component <NavLink to="/blog">Blog</NavLink> I added some blog section you can get information of climate and weather each day.</h3>
            <h3>Another component <NavLink to="/contact">Contact</NavLink> there you can contact me and i will reply you on email within 1 day 👍.</h3>

          </div>
        </div>
    </div>
  )
}

export default About;
