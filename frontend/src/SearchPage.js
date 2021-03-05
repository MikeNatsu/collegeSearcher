import React, {useState, useEffect} from 'react'
import SearchBar from './components/SearchBar';
import CollegeList from './components/CollegeList';
import './SearchPage.css'


const SearchPage = (props) => {
       
    const [input, setInput] = useState('');
    const [collegeListDefault, setCollegeListDefault] = useState();
    const [collegeList, setCollegeList] = useState();

    //alternative to componentDidMount() ---> useEffect()
    const fetchData = async () => {
        return await fetch('/api/colleges')
          .then(response => response.json())
          .then(data => {
             setCollegeList(data) 
             setCollegeListDefault(data)
           
            
        });
        
    }
    
      const updateInput = async (input) => {
        console.log(collegeListDefault);
         const filtered = collegeListDefault.filter(college => {
          return college.name.toLowerCase().includes(input.toLowerCase())
         })
         setInput(input);
         setCollegeList(filtered);
         
      }
    useEffect(()=> {fetchData()}, [])

    return (
        <>
          <h1> College List</h1>
          <SearchBar input={input} onChange={updateInput}/>  
          
          <CollegeList collegeList={collegeList}/>
        </>
    )
}

export default SearchPage
