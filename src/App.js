import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Videos from './components/Videos';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;