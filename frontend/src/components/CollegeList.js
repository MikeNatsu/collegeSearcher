import React from 'react'
import './CollegeList.css';


const CollegeList = ({collegeList=[]}) => {
    let max = 0; 
     
    return (
       <>
       <div className="listBox container mr-auto d-flex  flex-wrap">
       {collegeList.map((data,index) => {
           if(data && max < 10){
                max++; 
               return(
                   <div className="collegeItem  bg-dark border border-white w-50" >
                        <h1 >{data.name}  </h1>
                        <img src={`https://www.countryflags.io/${data.alpha_two_code}/flat/64.png`} alt={data.alpha_two_code}/>
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
