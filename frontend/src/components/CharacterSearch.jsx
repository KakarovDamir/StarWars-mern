import React, { useState } from 'react';
import apiService from '../services/apiService';
import { Link } from 'react-router-dom';
import '../styles/Search.css'; 

const CharacterSearch = () => {
  const [title, setTitle] = useState('');
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (title.trim() === '') {
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const data = await apiService.searchCharactersByTitle(title);
      if (Array.isArray(data.results)) {
        setCharacters(data.results);
      } else {
        setCharacters([]);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <h1>Search Characters</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter character name"
      />
      <button onClick={handleSearch} disabled={title.trim() === ''}>
        Search
      </button>
      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">Error: {error}</div>}
      {title.trim() !== '' && (
        <ul>
          {characters.length > 0 ? (
            characters.map((character) => {
              const characterId = character.url.match(/\/(\d+)\/$/)[1]; 
              return (
                <li key={characterId}>
                  <Link to={`/characters/${characterId}`}>{character.name}</Link>
                </li>
              );
            })
          ) : (
            <div className="no-results">No characters found</div>
          )}
        </ul>
      )}
    </div>
  );
};

export default CharacterSearch;
