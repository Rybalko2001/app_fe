import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = 'http://localhost:8000/api/';

function App() {
  const [bags, setBags] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBags = async () => {
      try {
        const response = await axios.get(API_URL);
        setBags(response.data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchBags();
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="App">
      <h1>Bags List</h1>
      <ul>
        {bags.map((bag) => (
          <li key={bag.id}>
            <h2>{bag.name}</h2>
            <p>Brand: {bag.brand}</p>
            <p>Price: ${bag.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
