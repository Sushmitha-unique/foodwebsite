import React, { useState, useEffect } from "react";
import axios from "axios";

const Practice = () => {
  const [change, setChange] = useState([]);

  useEffect(() => {
    hello();
  }, []);

  async function hello() {
    try {
      const response = await axios.get("http://localhost:3030/food");
      console.log(response.data);
      setChange(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {change.map((value) => (
        <div key={value._id}>
          <img src={value.url} alt="img" />
          <h1>{value.name}</h1>
          <h3>{value.rating}</h3>
          <h6>{value.type}</h6>
        </div>
      ))}
    </div>
  );
};

export default Practice;
