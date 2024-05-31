import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import apiService from '../services/apiService';
import Loader from '../components/UI/Loader/Loader';
import '../styles/Films.css';

const Films = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const data = await apiService.getAllFilms();
        setFilms(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchFilms();
  }, []);

  if (loading) return <Loader/>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='fcontainer'>
      <h1>Films</h1>
      <ul>
      {films.results.map(film => {
          const filmId = film.url.match(/\/(\d+)\/$/)[1]; 
          return (
            <li key={filmId}>
              <Link to={`/films/${filmId}`} className='flink'>{film.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Films;
