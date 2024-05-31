import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import apiService from '../services/apiService';
import Loader from '../components/UI/Loader/Loader';
import '../styles/Detail.css'; 


const FilmDetail = () => {
    const { filmId } = useParams();
    const [film, setFilm] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFilm = async () => {
            try {
              const data = await apiService.getFilmsById(filmId);
              setFilm(data);
              setLoading(false);
            } catch (err) {
              setError(err.message);
              setLoading(false);
            }
        };
        fetchFilm();
    }, [filmId]);

    if (loading) return <Loader/>;
    if (error) return <div className="error-message">Error: {error}</div>;

    
    return (
      <div className="character-detail">
        <h1>{film.title}</h1>
        <p>{film.opening_crawl}</p>
        <table>
          <tr>
            <th>Description</th>
            <th>Type</th>
          </tr>
          <tr>
            <td>Director</td>
            <td>{film.director}</td>
          </tr>
          <tr>
            <td>Producer</td>
            <td>{film.producer}</td>
          </tr>
          <tr>
            <td>Release Date</td>
            <td>{film.release_date}</td>
          </tr>
        </table>
        <h2 className="section-title">Characters</h2>
        <ul>
          {film.characters.map((characterUrl, index) => {
            const characterId = characterUrl.match(/\/(\d+)\/$/)[1];
            return (
              <li key={index}>
                <Link to={`/characters/${characterId}`}>{`Character ${index + 1}`}</Link>
              </li>
            );
          })}
        </ul>
        <h2 className="section-title">Planets</h2>
        <ul>
          {film.planets.map((planetUrl, index) => {
            const planetId = planetUrl.match(/\/(\d+)\/$/)[1];
            return (
              <li key={index}>
                <Link to={`/planets/${planetId}`}>{`Planet ${index + 1}`}</Link>
              </li>
            );
          })}
        </ul>
        <h2 className="section-title">Species</h2>
        <ul>
          {film.species.map((speciesUrl, index) => {
            const speciesId = speciesUrl.match(/\/(\d+)\/$/)[1];
            return (
              <li key={index}>
                <Link to={`/species/${speciesId}`}>{`Species ${index + 1}`}</Link>
              </li>
            );
          })}
        </ul>
        <h2 className="section-title">Starships</h2>
        <ul>
          {film.starships.map((starshipUrl, index) => {
            const starshipId = starshipUrl.match(/\/(\d+)\/$/)[1];
            return (
              <li key={index}>
                <Link to={`/starships/${starshipId}`}>{`Starship ${index + 1}`}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
};

export default FilmDetail;
