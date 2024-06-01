import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import apiService from '../services/apiService';
import Loader from '../components/UI/Loader/Loader';
import StarshipSearch from '../components/StarshipSearch';
import '../styles/Films.css';

const Starships = () => {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPageUrl, setCurrentPageUrl] = useState('https://starwars-mern.onrender.com/starships/');
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [previousPageUrl, setPreviousPageUrl] = useState(null);

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const data = await apiService.getAllStarships(currentPageUrl);
        setStarships(data.results);
        setNextPageUrl(data.next);
        setPreviousPageUrl(data.previous);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchStarships();
  }, [currentPageUrl]);

  const handleNextPage = () => {
    if (nextPageUrl) {
      setCurrentPageUrl(nextPageUrl);
    }
  };

  const handlePreviousPage = () => {
    if (previousPageUrl) {
      setCurrentPageUrl(previousPageUrl);
    }
  };

  if (loading) return <Loader/>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='fcontainer'>
      <StarshipSearch/>
      <h1>Starships</h1>
      <ul>
      {starships.map(starship => {
          const starshipId = starship.url.match(/\/(\d+)\/$/)[1]; 
          return (
            <li key={starshipId}>
              <Link to={`/starships/${starshipId}`} className='flink'>{starship.name}</Link>
            </li>
          );
        })}
      </ul>
      <div>
        <button onClick={handlePreviousPage} disabled={!previousPageUrl} className='prevb'>❮</button>
        <button onClick={handleNextPage} disabled={!nextPageUrl} className='nextb'>❯</button>
      </div>
    </div>
  );
};

export default Starships;
