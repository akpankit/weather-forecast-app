import React, { Component } from 'react';
import '../../App.css';
import { Route, withRouter, Link } from 'react-router-dom';
import Home from './Home';
import Search from '../../components/LocationSearch/LocationSearch';
import Weather from '../../components/WeatherForecast/Weather';

class WeatherForecast extends Component { 
  render() {
    return (
        <div>
            <Link to="/">
                <header className="App-header">
                <h1 className="App-title">Welcome to weather forecast</h1>
                </header>
            </Link>
        <Route 
            path="/" exact 
            render={(props) =><Home {...props} />} />       

        <Route 
            path="/search/:city" exact 
            render={(props) => <Search {...props} />} />  

        <Route 
            path="/weather/:woeid" exact 
            render={(props) => <Weather {...props} />} /> 
        </div>
    );
  }
}

export default withRouter(WeatherForecast);
