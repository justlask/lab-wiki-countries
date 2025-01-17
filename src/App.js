import React from 'react';
import logo from './logo.svg';
import './App.css';
import AllCountries from './AllCountries'
import CountryDetail from './CountryDetail'
import Navbar from './Navbar'
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Navbar />
      </header>
      <div id="main" className="row">
        <AllCountries />
        <Route exact path="/country/:id" component={CountryDetail} />
      </div>
      
    </div>
  );
}

export default App;
