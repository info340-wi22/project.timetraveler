import React from 'react';
import NavBar from './NavBar';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import { Routes, Route } from 'react-router-dom';
import Countdown from './Countdown'

function App(props) {
  const pets = props.pets;
  return (
    <div>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage pets={pets}/>} />
          <Route path="countdown" element={<Countdown />} />
          <Route path="about" element={<AboutPage />} />
        </Routes>

      </main>
      <footer className="container">
        <small>&copy; INFO340WI22 | Group B1 </small>
      </footer>
    </div>
  );
}

export default App;