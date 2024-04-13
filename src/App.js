import React, {useState, useEffect} from 'react';
import Data from './Data'
import './App.scss'

const Accordion = ()=>{
  const ApiUrl = 'https://jsonplaceholder.typicode.com/posts'
  const [showData, setshowData] = useState([]);
  
  const GetData =()=>{
    fetch(ApiUrl,{
      method:'GET',
    })
    .then(res=>res.json())
    .then((result)=>{
      if(result){
        setshowData(result);
      }
    })
    .catch((err)=>{
      console.log(err)
    })
  };

  useEffect(()=>{
    GetData();
  },[]);

  return(
    <div className='container'>
      {/* <div style={{textAlign:'center', height:'100px', display:'flex', alignnItems:'center', justifyContent:'center', backgroundColor:'orangered'}}> */}
        <h5 style={{textAlign:'center',lineHeight:'150px',marginTop:'50px',backgroundColor:'orangered', fontSize:'30px'}}>
          React Accordion By Bethel Wisdom 
        </h5>
      {/* </div> */}

    <div className='row'>
      {showData.map((item, index)=>(
          <div className='col xl-6 col-lg-6 col-md-6 col-sm-12 '>
             <Data {...item}/>
          </div>
      ))}
    </div>
  </div>
  )  
}

export default Accordion