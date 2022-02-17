import React, { useEffect } from 'react';

const SecondDrop =()=>{

    const [items, setItem]= React.useState([
        {label:"India",value:"1"},
        {label:"USA",value:"2"},
        {label:"UK",value:"3"}
    ]);
   
    useEffect(()=>{},[]);

    return(
                    <div> 
                        <div>country</div>

                    <select>
                        {items.map((item,key)=>{
                            <option key={key}>{item.label} {console.log(item.label)} </option>
                        })}
                    </select>
                    </div>
  );
}

export default SecondDrop;