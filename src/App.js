import React, { useEffect, useState } from 'react';
import Countries from './components/Countries'
import './App.css'
import Search from './components/Search';

const url = "https://restcountries.com/v3.1/all";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState(null);
  const [fiterCountries, setfiterCountries] = useState(countries);

  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setCountries(data);
      setfiterCountries(data);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  const handleRemoveCountry = (name) => {
    // alert(name);
    const filter = fiterCountries.filter((country) =>
      country.name.common !== name);
    setfiterCountries(filter);
  }

  const handleSearch = (searchValue) => {
    // alert(searchValue);
    let value = searchValue.toLowerCase();
    const newCountries = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value);
    })
    setfiterCountries(newCountries);
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Country App</h1>
      <Search onSearch={handleSearch} />

      {/* {countries && (
        <ul>
          {countries.map((country, index) => (
            <li key={index}>{country.name.common}</li>
          ))}
        </ul>
      )} */}

      {countries && <Countries countries={fiterCountries} onRemoveCountry={handleRemoveCountry} />}

    </div>
  );
}

export default App;
