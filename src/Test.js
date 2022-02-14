import React, { useEffect } from "react";
import Admin from "./components/Admin";
import SuperAdmin from "./components/SuperAdmin";

export default function Test() {
  const users = [
    {
      id: 1,
      name: "Admin",
      department: "Admin"
    },
    {
      id: 2,
      name: "Super Admin",
      department: "Super Admin"
    }
  ];
  const [value, setValue] = React.useState("");
  const [user, setUser] = React.useState(users);
  const [isFound, setIsFound] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleSelected = (e) => {
    setValue(e.target.value);
    if (e.target.value === "Admin") {
      setSelectedValue(<Admin />);
    } else if (e.target.value === "Super Admin") {
      setSelectedValue(<SuperAdmin />);
    }
  };
  const list = user.map((item, key) => {
    return (
      <option value={item.value} key={key}>
        {item.name}
      </option>
    );
  });
  return (
    <>
      <div className="App">
        {value}
        <select onChange={handleSelected}>{list}</select>
        <div>{selectedValue}</div>
      </div>
    </>
  );
}
