import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [country, setCountry] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [state, setstate] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountry(response.data);
    });
  }, []);

  const results = !searchTerm
    ? 0
    : country.filter((country) =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    

  console.log("resul", results.length);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <p>
        find countries
        <input type="text" value={searchTerm} onChange={handleChange} />
      </p>

      {results.length > 10
        ? "Too many matches, specify another filter"
        : searchTerm === ""
        ? ""
        : results.map((item) => <p key={item.name}>{item.name} </p>)}
    </div>
  );
}

export default App;
