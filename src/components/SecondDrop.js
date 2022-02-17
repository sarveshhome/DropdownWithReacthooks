import React, { useEffect } from 'react';

const SecondDrop =()=>{

    const [items, setItem]= React.useState([
        {label:"India",value:"1"},
        {label:"USA",value:"2"},
        {label:"UK",value:"3"}
    ]);
   
   var options= items.map((item,key)=>{
      return ( <option key={item.value} value={item.label}>{item.label} </option> )
    });
    useEffect(()=>{},[]);
    return(
                    <div> 
                        <div>country</div>
                        <select>
                            {items.map((item,key)=>{
                                return ( <option key={item.value} value={item.label}>{item.label} </option> )
                            })}
                        </select>                   
                    </div>
  );
}

export default SecondDrop;