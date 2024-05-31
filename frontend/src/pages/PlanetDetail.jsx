import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import apiService from '../services/apiService';
import Loader from '../components/UI/Loader/Loader';
import '../styles/Detail.css'; 


const PlanetDetail = () => {
  const { planetId } = useParams();
  const [planet, setPlanet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlanet = async () => {
      try {
        const data = await apiService.getPlanetsById(planetId);
        setPlanet(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPlanet();
  }, [planetId]);

  if (loading) return <Loader/>;
  if (error) return <div className="error-message">Error: {error}</div>;

  return (
    <div className="character-detail">
      <h1>{planet.name}</h1>
      <table>
        <tr>
          <th>Description</th>
          <th>Type</th>
        </tr>
        <tr>
          <td>Rotation Period:</td>
          <td> {planet.rotation_period}</td>
        </tr>
        <tr>
          <td>Orbital Period:</td>
          <td> {planet.orbital_period}</td>

        </tr>
        <tr>
          <td>Diameter:</td>
          <td> {planet.diameter}</td>
        </tr>
        <tr>
          <td>Climate:</td>
          <td> {planet.climate}</td>
        </tr>
        <tr>
          <td>Gravity</td>
          <td>{planet.gravity}</td>
        </tr>
        <tr>
          <td>Terrain</td>
          <td>{planet.terrain}</td>
        </tr>
        <tr>
          <td>Surface Water</td>
          <td>{planet.surface_water}</td>
        </tr>
        <tr>
          <td>Population</td>
          <td>{planet.population}</td>
        </tr>
      </table>
      <h2 className="section-title">Characters</h2>
      <ul>
        {planet.residents.map((residentUrl, index) => {
          const residentId = residentUrl.match(/\/(\d+)\/$/)[1]; 
          return (
            <li key={index}>
              <Link to={`/characters/${residentId}`}>{`Character ${index + 1}`}</Link>
            </li>
          );
        })}
      </ul>
      <h2 className="section-title">Films</h2>
      <ul>
        {planet.films.map((filmUrl, index) => {
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

export default PlanetDetail;
