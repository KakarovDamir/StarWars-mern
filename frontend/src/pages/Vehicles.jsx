import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import apiService from '../services/apiService';
import Loader from '../components/UI/Loader/Loader';
import '../styles/Films.css';

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPageUrl, setCurrentPageUrl] = useState('http://localhost:5000/vehicles/');
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [previousPageUrl, setPreviousPageUrl] = useState(null);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const data = await apiService.getAllVehicles(currentPageUrl);
        setVehicles(data.results);
        setNextPageUrl(data.next);
        setPreviousPageUrl(data.previous);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchVehicles();
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
      <h1>Vehicles</h1>
      <ul>
        {vehicles.map(vehicle => {
          const vehicleId = vehicle.url.match(/\/(\d+)\/$/)[1]; 
          return (
            <li key={vehicleId}>
              <Link to={`/vehicles/${vehicleId}`} className='flink'>{vehicle.name}</Link>
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

export default Vehicles;
