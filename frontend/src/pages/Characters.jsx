import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import apiService from '../services/apiService';
import Loader from '../components/UI/Loader/Loader';
import CharacterSearch from '../components/CharacterSearch';
import '../styles/Films.css'

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPageUrl, setCurrentPageUrl] = useState('https://starwars-mern.onrender.com/people/');
    const [nextPageUrl, setNextPageUrl] = useState(null);
    const [previousPageUrl, setPreviousPageUrl] = useState(null);

    useEffect(() => {
      const fetchCharacters = async () => {
          try {
              const data = await apiService.getAllCharacters(currentPageUrl);
              setCharacters(data.results);
              setNextPageUrl(data.next);
              setPreviousPageUrl(data.previous);
              setLoading(false);
          } catch (err) {
              setError(err.message);
              setLoading(false);
          }
      };
      fetchCharacters();
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
        <CharacterSearch />
        <h1>Characters</h1>
        <ul>
          {characters.map(character => {
            const characterId = character.url.match(/\/(\d+)\/$/)[1];
            return (
              <li key={characterId}>
                <Link to={`/characters/${characterId}`} className='flink'>{character.name}</Link>
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

export default Characters;
