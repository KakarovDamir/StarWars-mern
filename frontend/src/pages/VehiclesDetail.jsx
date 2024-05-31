import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import apiService from '../services/apiService';
import Loader from '../components/UI/Loader/Loader';
import '../styles/Detail.css'; 

const VehiclesDetail = () => {
  const { vehicleId } = useParams();
  const [vehicle, setVehicle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        const data = await apiService.getVehiclesById(vehicleId);
        setVehicle(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchVehicle();
  }, [vehicleId]);

  if (loading) return <Loader/>;
  if (error) return <div className="error-message">Error: {error}</div>;

  return (
    <div className="character-detail">
      <h1>{vehicle.name}</h1>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Model:</td>
            <td>{vehicle.model}</td>
          </tr>
          <tr>
            <td>Manufacturer:</td>
            <td>{vehicle.manufacturer}</td>
          </tr>
          <tr>
            <td>Cost in Credits:</td>
            <td>{vehicle.cost_in_credits}</td>
          </tr>
          <tr>
            <td>Length:</td>
            <td>{vehicle.length}</td>
          </tr>
          <tr>
            <td>Crew:</td>
            <td>{vehicle.crew}</td>
          </tr>
          <tr>
            <td>Passengers:</td>
            <td>{vehicle.passengers}</td>
          </tr>
        </tbody>
      </table>
      <div>
        <h2 className="section-title">Films</h2>
        <ul>
          {vehicle.films.map((filmUrl, index) => {
            const filmId = filmUrl.match(/\/(\d+)\/$/)[1];
            return (
              <li key={index}>
                <Link to={`/films/${filmId}`}>{`Film ${index + 1}`}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default VehiclesDetail;
