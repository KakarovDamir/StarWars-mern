import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from "./components/UI/NavBar/NavBar";
import Films from "./pages/Films"
import Characters from "./pages/Characters"
import Planets from "./pages/Planets"
import Species from "./pages/Species"
import Starships from "./pages/Starships"
import Home from "./pages/Home"

import FilmDetail from "./pages/FilmDetail";
import CharacterDetail from "./pages/CharacterDetail";
import PlanetDetail from "./pages/PlanetDetail";
import SpeciesDetail from "./pages/SpeciesDetail";
import StarshipDetail from "./pages/StarshipDetail";
import "./styles/App.css";
import Vehicles from "./pages/Vehicles";
import VehiclesDetail from "./pages/VehiclesDetail";

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path="/"                   element={<Home/>} />
        <Route path="/films"                    element={<Films/>} />
        <Route path="/films/:filmId"            element={<FilmDetail/>}/>
        <Route path="/characters"               element={<Characters/>} />
        <Route path="/characters/:characterId"  element={<CharacterDetail/>}/>
        <Route path="/planets"                  element={<Planets/>} />
        <Route path="/planets/:planetId"        element={<PlanetDetail/>}/>
        <Route path="/species"                  element={<Species/>} />
        <Route path="/species/:speciesId"       element={<SpeciesDetail/>}/>
        <Route path="/starships"                element={<Starships/>} />
        <Route path="/starships/:starshipId"    element={<StarshipDetail/>}/>
        <Route path="/vehicles"                 element={<Vehicles/>} />
        <Route path="/vehicles/:vehicleId"      element={<VehiclesDetail/>}/>
      </Routes>
    </Router>
  );
}

export default App;
