import React, {useState} from 'react'
import './App.css'
import {FcExpand, FcCollapse} from 'react-icons/fc'

const Data = ({title, body}) => {

    const [DisplayData, setDisplayData] = useState(false);

    const handleDisplay =()=>{
        setDisplayData(!DisplayData)
    }

    // const AccordionHoverd =()=>{
    //     DisplayData(true``)
    // }

  return (
    <div className={DisplayData ? ' accordion-opened accordion-item ' : 'accordion-item'} onMouseEnter={()=> setDisplayData(true)} onMouseLeave={()=> setDisplayData(false)}>
        <div className='accordion-title' onClick={handleDisplay} >
            <h5>{title}</h5>
            <p>{DisplayData ? <FcExpand size={20}/> : <FcCollapse size={20}/> }</p>          
        </div>   
     {DisplayData && <p>{body}</p>} 
    </div>
  )
}

export default Data
