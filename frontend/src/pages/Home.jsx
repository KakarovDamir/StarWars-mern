import React from 'react';
import JediList from '../components/JedisList';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to the Star Wars Universe</h1>
      <div className="marquee">
        <p>
        Welcome to our website dedicated to the amazing world of Star Wars!<br/>
        Here you will find all the information you ever wanted to know about<br/> 
        the famous franchise. Our website is a storehouse of knowledge about <br/>
        all the movies, characters, planets, starships, and much more related <br/>
        to the epic Star Wars saga.Learn about great Jedi like Luke Skywalker,<br/>
        Obi-Wan Kenobi and Yoda, and follow their travels and battles against <br/>
        the dark Sith, including Darth Vader and Emperor Palpatine. Explore the <br/>
        galaxy with your favorite characters and discover many unexplored worlds <br/>
        and creatures.Our website offers detailed reviews and analyses of all <br/>
        episodes, starting with the classic trilogy and ending with new films <br/>
        and TV series. You can follow the evolution of the plot, get acquainted <br/>
        with the development of the characters and enjoy the most<br/> memorable moments 
        in the history of cinema.<br/>For real fans, we have a unique collection of <br/>
        artifacts, including photos, videos, concept art and other materials that <br/>
        will help you immerse yourself in the atmosphere of Star Wars. You can also <br/>
        find information here about the various types of lightsabers, starships, <br/>
        and droids that played key roles in<br/> the saga.Our forum and blog will provide<br/> 
        you with the opportunity to discuss the latest news and theories with other fans,<br/>
        as well as learn about upcoming releases and events in the world of Star Wars. <br/>
        Join the Star Wars fan community and <br/>share your impressions, ideas and discoveries.<br/>
        We strive to make our website the best source of information and inspiration <br/>
        for everyone who loves Star Wars. Stay with us and discover a new galaxy of<br/>
        adventures and opportunities. May the force be with you!<br/>
        </p>
      </div>
      <JediList />
    </div>
  );
};

export default Home;
