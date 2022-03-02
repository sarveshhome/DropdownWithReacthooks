import React, { useState } from "react";
import ReactDOM from "react-dom";
import '../App.css';

const SearchText2 =(props)=>{
    const [searchTerm,setSearchTerm]= useState("");

    const handleChange = event => {
        console.log(event.target.value);
        setSearchTerm(event.target.value);
      };
    return (
        <div className="App">
            <input type="text" placeholder="Search" value={searchTerm}  onChange={handleChange}></input>
        </div>
    )
}

export default SearchText2;