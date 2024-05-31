import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import apiService from '../services/apiService';
import Loader from '../components/UI/Loader/Loader';
import PlanetSearch from '../components/PlanetSearch';
import '../styles/Films.css';

const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPageUrl, setCurrentPageUrl] = useState('http://localhost:5000/planets/');
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [previousPageUrl, setPreviousPageUrl] = useState(null);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const data = await apiService.getAllPlanets(currentPageUrl);
        setPlanets(data.results);
        setNextPageUrl(data.next);
        setPreviousPageUrl(data.previous);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPlanets();
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

  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='fcontainer'>
      <PlanetSearch />
      <h1>Planets</h1>
      <ul>
        {planets.map(planet => {
          const planetId = planet.url.match(/\/(\d+)\/$/)[1];
          return (
            <li key={planetId}>
              <Link to={`/planets/${planetId}`} className='flink'>{planet.name}</Link>
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

export default Planets;
