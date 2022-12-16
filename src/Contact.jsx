import React, { useState } from 'react'
import Link from './Link';
import './index.css';
 
const Contact = () => {
  const [set,setData]=useState({
    fname:'',
    lname:'',
    email:'',
    password:'',
    mobile:'',
  });
  function get(event){
    let name=event.target.name;
    let value=event.target.value;
    setData({...set,[name]:value});
  }
  async function post(){
    let {fname,lname,password,email,mobile}=set;
    const res=await fetch('https://weatherphp-d7b0a-default-rtdb.firebaseio.com/userRecord.json',{  
      method:"POST",
      header:{
        "content-type":"application/json"
      },
      body:JSON.stringify({
        fname,lname,email,password,mobile
      })
    });
    if(res){
      setData({
        fname:'',
        lname:'',
        email:'',
        password:'',
        mobile:'',
      });
      alert("Request Submitted 👍");

    }else{
      alert("Request not Submitted 👎");
    }
  }
  return (
    <div>
    <Link />
    <div className='contact'>
        
       
      <div className='right'>
      <div className='find'>
        <h1> Find me here </h1>
        <h3>fill this form</h3>
      </div>
        <div className='input'>
         <div className='name'>
          <div className='fname'>
          <input type="text" placeholder="First Name"
          value={set.fname}
          name="fname"
          onChange={get}/>
          </div>
          <div className='fname'>
          <input type="text" placeholder="Last Name"
          value={set.lname}
          name="lname"
          onChange={get}/>
          </div>
         </div>
         <div className='email a'>
          <input type="email" placeholder="Enter Your Email"
          value={set.email}
          name="email"
          onChange={get}/>
         </div>
         <div className='password a'>
          <input type="password" placeholder='Enter Your Password'
          value={set.password}
          name="password"
          onChange={get}/>
         </div>
         <div className="mobile a">
          <input type="number" placeholder='enter your contact number'
          value={set.mobile}
          name="mobile"
          onChange={get}/>
         </div>
         <button className='contactBut' onClick={post}><p>submit</p></button>
        </div>
      </div>
<div className='images'>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_8wSBFhQtWAOhnTCtUofOPUpOmSi-_kmhfQ&usqp=CAU" alt="contact image" />

</div>        
    </div>
  
    </div>
  )
}

export default Contact;
