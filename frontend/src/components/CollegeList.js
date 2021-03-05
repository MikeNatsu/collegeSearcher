import React from 'react'
import './CollegeList.css';


const CollegeList = ({collegeList=[]}) => {
    return (
       <>
       <div className="listBox">
       {collegeList.map((data,index) => {
           if(data){
               return(
                   <div className="collegeItem">
                        <h1 >{data.name}  </h1>
                        <h2>Domains</h2>
                        <li>
                        {data.domains.map((dom, index) =>{
                            return <lu>{dom}</lu>
                        })}
                        </li>
                    </div>
               )
           }

           return null;
       })}
       </div>
       </>
    )
}

export default CollegeList
