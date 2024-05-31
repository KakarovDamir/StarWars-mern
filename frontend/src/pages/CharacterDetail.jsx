import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import apiService from '../services/apiService';
import Loader from '../components/UI/Loader/Loader';
import '../styles/Detail.css'; 

const CharacterDetail = () => {
  const { characterId } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const data = await apiService.getCharactersById(characterId);
        setCharacter(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [characterId]);

  if (loading) return <Loader/>;
  if (error) return <div className="error-message">Error: {error}</div>;

  return (
    <div className="character-detail">
      <h1>{character.name}</h1>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Height:</td>
            <td>{character.height}</td>
          </tr>
          <tr>
            <td>Mass:</td>
            <td>{character.mass}</td>
          </tr>
          <tr>
            <td>Gender:</td>
            <td>{character.gender}</td>
          </tr>
          <tr>
            <td>Eye color:</td>
            <td>{character.eye_color}</td>
          </tr>
          <tr>
            <td>Hair color:</td>
            <td>{character.hair_color}</td>
          </tr>
          <tr>
            <td>Skin color:</td>
            <td>{character.skin_color}</td>
          </tr>
          <tr>
            <td>Birth year:</td>
            <td>{character.birth_year}</td>
          </tr>
        </tbody>
      </table>    
      <div>
        <h2 className="section-title">Films</h2>
        <ul>
          {character.films.map((filmUrl, index) => {
            const filmId = filmUrl.match(/\/(\d+)\/$/)[1];
            return (
              <li key={index}>
                <Link to={`/films/${filmId}`}>{`Film ${index + 1}`}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <h2 className="section-title">Starships</h2>
        <ul>
          {character.starships.map((starshipUrl, index) => {
            const starshipId = starshipUrl.match(/\/(\d+)\/$/)[1];
            return (
              <li key={index}>
                <Link to={`/starships/${starshipId}`}>{`Starship ${index + 1}`}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <h2 className="section-title">Species</h2>
        <ul>
          {character.species.map((speciesUrl, index) => {
            const speciesId = speciesUrl.match(/\/(\d+)\/$/)[1];
            return (
              <li key={index}>
                <Link to={`/species/${speciesId}`}>{`Species ${index + 1}`}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CharacterDetail;
