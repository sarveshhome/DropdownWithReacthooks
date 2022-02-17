import React, { useEffect, useState }  from "react";
import {countryList} from "../assets/Country";

const ThirdDropdown = ()=>{
    const [countryname,setCountryname] = useState(countryList);



   useEffect(()=>{},[])

    return (
        <>
           <select>
               {
                   countryname.map((item,key)=>{
                        return (<option key={key} value={item}>{item}</option>)
                   })
               }
           </select>
        </>
    );

}

export default ThirdDropdown;