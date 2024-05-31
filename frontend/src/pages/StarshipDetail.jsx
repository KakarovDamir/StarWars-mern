import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import apiService from '../services/apiService';
import Loader from '../components/UI/Loader/Loader';
import '../styles/Detail.css'; 


const StarshipDetail = () => {
  const { starshipId } = useParams();
  const [starship, setStarship] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStarship = async () => {
      try {
        const data = await apiService.getStarshipsById(starshipId);
        setStarship(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchStarship();
  }, [starshipId]);

  if (loading) return <Loader/>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="character-detail">
      <h1>{starship.name}</h1>
      <table>
        <tr>
          <th>Description</th>
          <th>Type</th>
        </tr>
        <tr>
          <td>Model:</td>
          <td>{starship.model}</td>
        </tr>
        <tr>
          <td>Manufacturer:</td>
          <td>{starship.manufacturer}</td>
        </tr>
        <tr>
          <td>Cost in credits:</td>
          <td>{starship.cost_in_credits}</td>
        </tr>
        <tr>
          <td>Length:</td>
          <td>{starship.length}</td>
        </tr>
        <tr>
          <td>Max Atmosphering Speed:</td>
          <td>{starship.max_atmosphering_speed}</td>
        </tr>
        <tr>
          <td>Crew:</td>
          <td>{starship.crew}</td>
        </tr>
        <tr>
          <td>Passengers:</td>
          <td>{starship.passengers}</td>
        </tr>
        <tr>
          <td>Cargo Capacity:</td>
          <td>{starship.cargo_capacity}</td>
        </tr>
        <tr>
          <td>Consumables:</td>
          <td>{starship.consumables}</td>
        </tr>
        <tr>
          <td>Hyperdrive Rating:</td>
          <td>{starship.hyperdrive_rating}</td>
        </tr>
        <tr>
          <td>MGLT:</td>
          <td>{starship.MGLT}</td>
        </tr>
        <tr>
          <td>Starship Class:</td>
          <td>{starship.starship_class}</td>
        </tr>
      </table>
      <h2 className="section-title">Characters</h2>
      <ul>
        {starship.pilots.map((pilotUrl, index) => {
          const pilotId = pilotUrl.match(/\/(\d+)\/$/)[1]; 
          return (
            <li key={index}>
              <Link to={`/characters/${pilotId}`}>{`Character ${index + 1}`}</Link>
            </li>
          );
        })}
      </ul>
      <h2 className="section-title">Films</h2>
      <ul>
        {starship.films.map((filmUrl, index) => {
            const filmId = filmUrl.match(/\/(\d+)\/$/)[1]; 
            return (
              <li key={index}>
                <Link to={`/films/${filmId}`}>{`Film ${index + 1}`}</Link>
              </li>
            );
        })}
      </ul>
    </div>
  );
};

export default StarshipDetail;
