import React, {useState, useEffect} from 'react'
import SearchBar from './components/SearchBar';
import CollegeList from './components/CollegeList';
import './SearchPage.css'


const SearchPage = (props) => {
       
    const [input, setInput] = useState('');
    const [collegeListDefault, setCollegeListDefault] = useState();
    const [collegeList, setCollegeList] = useState();
    //const [collegeUSData, setCollegeUSData] = useState(); 

    //alternative to componentDidMount() ---> useEffect()
    //fetching WU.json from router (express);
    const fetchData = async () => {
        return await fetch('/api/colleges')
          .then(response => response.json())
          .then(data => {
             setCollegeList(data) 
             setCollegeListDefault(data)
           
            
        });
        
    }

    // //fetching College API 
    // const fetchCollegeUS = async () => {
    //     return await fetch("https://api.collegeai.com/v1/api/autocomplete/colleges?api_key=MY_API_KEY&query=MIT")
    //       .then(r => r.json())
    //       .then(response => {
    //         setCollegeUSData(response);
    //         console.log(collegeUSData);
    //       console.log(response)
    //     });

    // }
    
      const updateInput = async (input) => {
       
         const filtered = collegeListDefault.filter(college => {
          return college.name.toLowerCase().includes(input.toLowerCase())
         })
         setInput(input);
         setCollegeList(filtered);
         
      }

    useEffect(()=> {fetchData()}, []);

    

    return (
        <>
          <h1 className="display-1"> College List</h1>
          <SearchBar input={input} onChange={updateInput}/>  
          
          <CollegeList collegeList={collegeList}/>
        </>
    )
}

export default SearchPage
