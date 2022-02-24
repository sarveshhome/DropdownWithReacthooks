import React from "react";

let names = [
    "sarvesh", "paras","tarun","shashi","parth","aman","vikash","rahul","prashant"];
const SearchText = () => {
    const [searchValue, setSearchValue] = React.useState("");

    const searchHandler = (event) => {       
        console.log(event);
    }

    return (
        <>
            <input
                type="text"
                name="search"
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
            />
            <ul>
                {names
                    .filter(name => name.match(new RegExp(searchValue, "i")))
                    .map(name => {
                        return <li key={name}>{name} </li>
                    })}
            </ul>
        </>
    )
}

export default SearchText;