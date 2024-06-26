import React, {useState} from 'react'
import './App.scss'
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
    <div className={DisplayData ? ' accordion-opened accordion-item ' : 'accordion-item'}  >
        <div className='accordion-title' onClick={handleDisplay} >
            <h5>{title}</h5>
            <p>{DisplayData ? <FcExpand size={20} onClick={()=> setDisplayData(true)}/> : <FcCollapse size={20} onClick={()=> setDisplayData(false)}/> }</p>          
        </div>   
     {DisplayData && <p>{body}</p>} 
    </div>
  )
}

export default Data
