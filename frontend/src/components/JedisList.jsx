import React, { useEffect, useState } from 'react';
import apiService from '../services/apiService';
import Loader from './UI/Loader/Loader';

const JediList = () => {
  const [jedis, setJedis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJedis = async () => {
      try {
        const data = await apiService.getAllJedis();
        setJedis(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchJedis();
  }, []);

  if (loading) return <Loader/>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Jedis</h1>
      <ul>
        {jedis.map(jedi => (
          <li key={jedi._id}>
            <img src={jedi.photoUrl} alt=""/>
            <h2>{jedi.name}</h2>
            <h3>{jedi.rank}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JediList;
