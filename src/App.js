import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import WeatherForecast from './containers/WeatherForecast/WeatherForecast';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <WeatherForecast />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
