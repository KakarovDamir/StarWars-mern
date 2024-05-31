import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import apiService from '../services/apiService';
import Loader from '../components/UI/Loader/Loader';
import '../styles/Detail.css'; 


const SpeciesDetail = () => {
  const { speciesId } = useParams();
  const [species, setSpecies] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSpecies = async () => {
      try {
        const data = await apiService.getSpeciesById(speciesId);
        setSpecies(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchSpecies();
  }, [speciesId]);

  if (loading) return <Loader/>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="character-detail">
      <h1>{species.name}</h1>
      <table>
        <tr>
          <th>Description</th>
          <th>Type</th>
        </tr>
        <tr>
          <td>Classification:</td>
          <td>{species.classification}</td>
        </tr>
        <tr>
          <td>Designation:</td>
          <td>{species.designation}</td>
        </tr>
        <tr>
          <td>Average height:</td>
          <td>{species.average_height}</td>
        </tr>
        <tr>
          <td>Skin colors:</td>
          <td>{species.skin_colors}</td>
        </tr>
        <tr>
          <td>Hair colors:</td>
          <td>{species.hair_colors}</td>
        </tr>
        <tr>
          <td>Eye colors:</td>
          <td>{species.eye_colors}</td>
        </tr>
        <tr>
          <td>Average lifespan:</td>
          <td>{species.average_lifespan}</td>
        </tr>
        <tr>
          <td>Language:</td>
          <td>{species.language}</td>
        </tr>
      </table>
      <h2 className="section-title">Characters</h2>
      <ul>
        {species.people.map((peopleUrl, index) => {
          const peopleId = peopleUrl.match(/\/(\d+)\/$/)[1]; 
          return (
            <li key={index}>
              <Link to={`/characters/${peopleId}`}>{`Character ${index + 1}`}</Link>
            </li>
          );
        })}
      </ul>
      <h2 className="section-title">Films</h2>
      <ul>
        {species.films.map((filmUrl, index) => {
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

export default SpeciesDetail;
