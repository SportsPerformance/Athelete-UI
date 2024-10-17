// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/home/Home';
import Event from './Components/event/Event';
import Navbar from './Components/navbar/Navbar';
import Profile from './Components/profile/Profile';
import ProfileForm from './Components/profile/ProfileForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="App-header">
          <div className="App-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/event" element={<Event />} />
              <Route path="/add-profile" element={<ProfileForm onAddProfile={() => {}} />} /> 
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
