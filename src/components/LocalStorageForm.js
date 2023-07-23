import React, { useState, useEffect } from "react";
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const LocalStorageForm = () => {
  // const [input, setInput] = useState("");

  const [value, setValue] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("data")) || [];
    setData(storedData);
  }, []);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedData = JSON.parse(localStorage.getItem("data")) || [];
    storedData.push(value);
    localStorage.setItem("data", JSON.stringify(storedData));
    setData(storedData);
    setValue("");
  };

  const handleRemove = (indexToRemove) => {
    const storedData = JSON.parse(localStorage.getItem("data")) || [];
    const newData = storedData.filter((item, index) => index !== indexToRemove);
    localStorage.setItem("data", JSON.stringify(newData));
    setData(newData);
  };

  // Retrieve data from local storage on load
  const storedData = JSON.parse(localStorage.getItem("data")) || [];

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      <ul style={{ width: "60%", margin: "auto" }}>
        {data.map((item, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: `hsl(${index * 100}, 70%, 55%)`,
              color: "black",
              padding: "10px",
              margin: "5px 0"
            }}
          >
            <span>{item}</span>
            <button onClick={() => handleRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocalStorageForm;
