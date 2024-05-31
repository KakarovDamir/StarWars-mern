import React, { useState } from 'react';
import apiService from '../services/apiService';
import { Link } from 'react-router-dom';

const PlanetSearch = () => {
  const [title, setTitle] = useState('');
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (title.trim() === '') {
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const data = await apiService.searchPlanetsByTitle(title);
      if (Array.isArray(data.results)) {
        setFilms(data.results);
      } else {
        setFilms([]);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <h1>Search Planets</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter planet name"
      />
      <button onClick={handleSearch} disabled={title.trim() === ''}>
        Search
      </button>
      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">Error: {error}</div>}
      {title.trim() !== '' && (
        <ul>
          {films.length > 0 ? (
            films.map((film) => {
              const filmId = film.url.match(/\/(\d+)\/$/)[1]; 
              return (
                <li key={filmId}>
                  <Link to={`/planets/${filmId}`}>{film.name}</Link>
                </li>
              );
            })
          ) : (
            <div className="no-results">No planets found</div>
          )}
        </ul>
      )}
    </div>
  );
};

export default PlanetSearch;
