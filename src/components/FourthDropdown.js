
import React from "react";

const FourthDropdown =() =>{
    const[items,setItems]= React.useState([]);

    async function getCountryList(){
        const response = fetch("https://api.first.org/data/v1/countries");
        const body = await response.json();
        console.log(body);
    }
    getCountryList();

    return (
        <>
        
        </>
    )
}

export default FourthDropdown;

