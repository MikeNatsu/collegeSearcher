import React from 'react'

const SearchBar = ({input, onChange}) => {
    const BarStyling = {
        width: "50rem",
        background: "#F2F1F9",
        border: "none",
        padding: "1rem" 
    };
    
    return (
        <input className="container" style={BarStyling} value={input}  placeholder={"Search college"} onChange={(e) => onChange(e.target.value)}/>
    )
}
export default SearchBar;
