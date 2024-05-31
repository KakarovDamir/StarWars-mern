import React from 'react';
import JediList from '../components/JedisList';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to the Star Wars Universe</h1>
      <div className="marquee">
        <p>
        Welcome to our website dedicated to the amazing world of Star Wars! Here you will find all the information you ever wanted to know about the famous franchise. Our website is a storehouse of knowledge about all the movies, characters, planets, starships, and much more related to the epic Star Wars saga.
Learn about great Jedi like Luke Skywalker, Obi-Wan Kenobi and Yoda, and follow their travels and battles against the dark Sith, including Darth Vader and Emperor Palpatine. Explore the galaxy with your favorite characters and discover many unexplored worlds and creatures.
Our website offers detailed reviews and analyses of all episodes, starting with the classic trilogy and ending with new films and TV series. You can follow the evolution of the plot, get acquainted with the development of the characters and enjoy the most memorable moments in the history of cinema.
For real fans, we have a unique collection of artifacts, including photos, videos, concept art and other materials that will help you immerse yourself in the atmosphere of Star Wars. You can also find information here about the various types of lightsabers, starships, and droids that played key roles in the saga.
Our forum and blog will provide you with the opportunity to discuss the latest news and theories with other fans, as well as learn about upcoming releases and events in the world of Star Wars. Join the Star Wars fan community and share your impressions, ideas and discoveries.
We strive to make our website the best source of information and inspiration for everyone who loves Star Wars. Stay with us and discover a new galaxy of adventures and opportunities. May the force be with you!
        </p>
      </div>
      <JediList />
    </div>
  );
};

export default Home;
