import React, { useState, useEffect } from "react";
import axios from "axios";
import TextField from "./components/TextField";
import Countries from "./components/Countries";
import Weather from "./components/Weather";

const App = () => {
  const [country, setCountry] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountry(response.data);
    });
  }, []);

  const results =
    searchTerm &&
    country.filter((country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const tooCountries = (params) => {
    if (params.length > 10) {
      return <p>Too many matches, specify another filter</p>;
    }
  };

  const oneCountry = (params) => {
    if (params.length === 1) {
      return params.map((item) => (
        <div key={item.name}>
          <h1>{item.name} </h1>
          <p>Capital {item.capital}</p>
          <p>Population {item.population}</p>
          <h2>Languages</h2>
          {languages(item.languages)}
          <object data={item.flag}> </object>
          {<Weather results={params} capital={item.capital} />}
        </div>
      ));
    }
  };

  const countries = (params) => {
    if (params.length >= 2 && params.length <= 10) {
      return params.map((item) => (
        <p key={item.name}>
          {item.name}
        </p>
      ));
    }
  };

  const languages = (params) =>
    params.map((languages, i) => (
      <ul key={i}>
        <li>{languages.name}</li>
      </ul>
    ));

  return (
    <div>
      <TextField
        searchTerm={searchTerm}
        handleChange={handleChange}
        text="find countries"
      />
      <Countries
        tooCountries={tooCountries(results)}
        countries={countries(results)}
        oneCountry={oneCountry(results)}
      />
    </div>
  );
};

export default App;
