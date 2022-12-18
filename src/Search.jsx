import React, {useState, useEffect} from 'react'
import Link from './Link'
// import { useEffect, useState } from 'react'
function Search(){
    const [set,setData]=useState({
        name:'',
    });
  
    //data of state
    const [dates,setDate]=useState();
    const [country,setCountry]=useState();
    const [region,setRegion]=useState();
    const [time,setTime]=useState();
    const [tz,setTz]=useState();
    const [icon,setIcon]=useState();
    const [text,setText]=useState();
    const [tempc,setTempc]=useState();
    const [tempf,setTempf]=useState();
    const [humidity,setHumitity]=useState();
    const [gust,setGust]=useState();
    const [uv,setUv]=useState();
    const [windDeg,setWinddeg]=useState();
    const [windDir,setWindDir]=useState();
    const [windKph,setWindKph]=useState();
    const [windMph,setWindMph]=useState();
    const [update,setUpdate]=useState();
    const [cloud,setCloud]=useState();
    const [dat,setDat]=useState([]);
    const [name,setName]=useState();

//data of state finish





    
    function get(event){
        let inputData=event.target.value;
        setData(inputData);
    }
    async function show(){
        // const res=await fetch(`
        // https://api.weatherapi.com/v1/forecast.json?key=5883fe5fd9274e7fae9105132221611&q=${set}&days=1&aqi=no&alerts=no
        // `);
        const res=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=c1701068363c433db8e122704221612&q=${set}&days=1&aqi=no&alerts=no
        `);
        const data=await res.json();
         //use of  state
         
         const location=data.location;
         const c=data.current.condition;
         const d=data.current;
 
         setTime(location.localtime);
         setCountry(location.country);
         setName(location.name);
         setRegion(location.region);
         setTz(location.tz_id);
         setIcon(c.icon);
         setText(c.text);
         setTempc(d.temp_c);
         setTempf(d.temp_f);
         setHumitity(d.humidity);
         setGust(d.gust_kph);
         setUv(d.uv);
         setWinddeg(d.wind_degree);
         setWindDir(d.wind_dir);
         setWindKph(d.wind_kph);
         setWindMph(d.wind_mph);
         setUpdate(d.last_updated);
         setCloud(d.cloud);
 





         //use of state finish
    }

//
async function everytime(){
    let resp=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=c1701068363c433db8e122704221612&q=${set}&days=1&aqi=no&alerts=no
    `);
    let datas=await resp.json();
    let dat=datas.forecast.forecastday[0].hour;
    setDat(dat);
    // console.log(datas.forecast.forecastday[0].hour);
}





//  


    useEffect(()=>{
        show();
        everytime();

    })
    return(
        
        <>
            <Link />
            <div className='homeSearch'>
            {/* <button onClick={show}><img src="https://cdn-icons-png.flaticon.com/128/656/656829.png" alt="search" /></button> */}
        <input type="text" placeholder="Country/City/State"
        value={set.name}
        onChange={get}/>
            </div>



        {/* home page same data */}


        <div className='home'>
   <div className='home1'>
       <div className='con1'>
        <div className='country'>
        Country:{country}
        <div className='name'>{name}</div>
        <div className='region'>
        region:{region}
        </div>
        </div>
        <div className='time'>
         <span className='tim'>time:{time}</span>
        </div>
         <span className='tz'>tz_id:{tz}</span>
            
       </div>
   <div className='homeSearch'>
       <div className='con2'>
        <div className='icon'>
            <img src={icon} alt="weather condition" />
        </div>
        <div className='text'>
            {text}
        </div>
       </div>
       <div className='con3'>
        <div className='c'>temperature in degree celsius:<span className='t'>{tempc}°c</span></div>
        <div className='f'>temperature in degree fahrenheit :<span className='t'>{tempf}°f</span></div>
        <div className='humidity'>Humidity:<span className='t'>{humidity}</span></div>
        <div className='gust'>gust:<span className='t'>{gust}</span></div>
        {/* <div className='gust'>gust:<span className='t'>{gust}</span></div> */}
       </div>
       <div className='con4'>
        <div className='update'>
            Last update:<span className='t'>{update}</span>
        </div>
        <div className='uv'>UV Ray:<span className='t'>{uv}</span></div>
        <div className='cloud'>Cloud percent:<span className='t'>{cloud}%</span></div>
       </div>

   
       
    <div className='con5'>
        <div className='windDeg'>Wind degree:<span className='t'>{windDeg}°</span></div>
        <div className='windDir'>Wind direction:<span className='g'>{windDir}</span></div>
        <div className='windKph'>Wind speed in Kph:<span className='t'>{windKph}</span></div>
        <div className='windMph'>wind direction in Mph:<span className='t'>{windMph}</span></div>
    </div>
    
    </div>
    <div className='everyday'>
        {
            dat.map((item,i)=>{
                return(
                    <>
                        <div className='day' key={i}>
                          
                            <div className='box'>
                            <div className='boxTime'>
                            {item.time}
                            </div>
                                <div className='img'>
                            <img src= {item.condition.icon} alt="icon" />

                                </div>
                                <div className='boxText'>{item.condition.text}</div>
                                <div className='boxTemp'>
                                {item.temp_c}°C
                                </div>
                            </div>                            
                        </div>
                    </>
                )
            })
        }
    </div>
   </div>
   </div>









        {/* home page same data finished */}
        
        </>
    )
}
export default Search;