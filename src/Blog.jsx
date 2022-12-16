// import React, { useState } from 'react'
// import Link from './Link';
// import List from './List';
// import List1 from './List1';
// import List2 from './List2';
// const Blog = () => {
//   const [set,setData]=useState();
//   const [title,setTitle]=useState();
//   const [thought,setThought]=useState();

//   const [item,setItem]=useState([]);
//   const [titleMain,setTitleMain]=useState([]);
//   const [thoughtMain,setTitleThought]=useState([]);

  
//   const get = (e) => {
//     setData(e.target.value);
//    }


    
//   const get1 = (e) => {
//      setTitle(e.target.value);
//    }


    
//   const get2 = (e) => {
 
//     setThought(e.target.value)
//   }



//   const post = () =>{
//     setItem((prev)=>{
//       return [...prev,set];
//     }); 
//     setTitleMain((pre)=>{
//       return [...pre,title];
//     });
//     setTitleThought((pr)=>{
//       return [...pr,thought];
//     })
//     setData(" "); 
//     setTitle(" ");
//     setThought(" ");
//   }
//   return (
//     <div>
//     <Link />
//     <div className='blog'>
//       <div className='blogName'>
//         <p>This section is all about your vision to climate and weather write your thought here. 😄</p>
//       </div>
//     </div>
//       <input type="text"  placeholder='Enter your name' onChange={get} value={set}/>
//       <input type="text"  placeholder='Enter Title ' onChange={get1} value={title}/>
//       <input type="text"  placeholder='Enter your thought' onChange={get2} value={thought}/>
//       <button onClick={post}>+</button>

//       <ol>

//     { item.map((items)=>{
//         return <List name={items} />
//       })}
//       {/* </ol>
//       <ol> */}

// { titleMain.map((items)=>{
//     return <List1 name={items} />
//   })}
//   {/* </ol>
//   <ol> */}

// { thoughtMain.map((items)=>{
//     return <List2 name={items} />
//   })}
//   </ol>
//     </div>
//   )
// }

// export default Blog;




import React from 'react'
import Link from './Link';
function Blog(){
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '12d7aecbdcmshf68dd55db3022fap10c103jsn4278a783a1a3',
      'X-RapidAPI-Host': 'climate-change-news12.p.rapidapi.com'
    }
  };
  
  fetch('https://climate-change-news12.p.rapidapi.com/news/BBC', options)
     .then(function(resp){
      return resp.json();
     })
     .then(function(data){
      console.log(data);
     })
     
  return(
    <>
    <Link />
      <div className='blog'>
        <div className='bolgMain'>
          <div className='news'>
            {

            }
          </div>
        </div>
      </div>
    </>
  )
}
export default Blog;