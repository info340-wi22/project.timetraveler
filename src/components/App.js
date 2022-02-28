import React, { useState } from 'react';
import NavBar from './NavBar';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import { Routes, Route } from 'react-router-dom';
import Countdown from './Countdown'

const LOCATION_LIST = [
  { "name": "Seattle" },
  { "name": "Shanghai" },
  { "name": "London" }
];

function App(props) {
  const pets = props.pets;
  return (
    <div>
      <NavBar />
      <main>
<<<<<<< HEAD


        <Routes>
          <Route path="/" element={<HomePage pets={pets}/>} />
          <Route path="countdown" element={<Countdown />} />
          <Route path="about" element={<AboutPage />} />
        </Routes>

=======
        {/* <Routes>
          <Route path="home" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="countdown" element={<CountdownPage/>} />
        </Routes> */}
        <Countdown />
        {/* <HomePage /> */}
>>>>>>> 089c1589253ea2f973b44a382ddc1638640895ed
      </main>
      <footer className="container">
        <small>&copy; INFO340WI22 | Group B1 </small>
      </footer>
    </div>
  );
}

export default App;