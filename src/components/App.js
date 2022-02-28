import React, { useState } from 'react';
import PetList from './EventList';
import ComposeForm from './ComposeForm';
import { LocationList } from './LocationList';
import NavBar from './NavBar';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Selection from './Type';
import { Routes, Route } from 'react-router-dom';
import Countdown from './Countdown'

const LOCATION_LIST = [
  { "name": "Seattle" },
  { "name": "Shanghai" },
  { "name": "London" }
];

function App(props) {

  return (
    <div>
      <NavBar />
      <main>
        {/* <Routes>
          <Route path="home" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="countdown" element={<CountdownPage/>} />
        </Routes> */}
        <Countdown />
        {/* <HomePage /> */}
      </main>
      <footer className="container">
        <small>Images from <a href="http://www.seattlehumane.org/adoption/name">Seattle Humane Society</a></small>
      </footer>
    </div>
  );
}

export default App;