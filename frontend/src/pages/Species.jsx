import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import apiService from '../services/apiService';
import Loader from '../components/UI/Loader/Loader';
import '../styles/Films.css';

const Species = () => {
  const [species, setSpecies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSpecies = async () => {
      try {
        const data = await apiService.getAllSpecies();
        setSpecies(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchSpecies();
  }, []);

  if (loading) return <Loader/>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='fcontainer'>
      <h1>Species</h1>
      <ul>
      {species.results.map(species => {
          const speciesId = species.url.match(/\/(\d+)\/$/)[1]; 
          return (
            <li key={speciesId}>
              <Link to={`/species/${speciesId}`} className='flink'>{species.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Species;
