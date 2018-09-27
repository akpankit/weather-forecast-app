import React from 'react';
import Cities from '../../components/WeatherForecast/Cities';
import Search from '../../components/LocationSearch/LocationSearch';

const Home = (props) => {
    let default_cities = [

        {
            "woeid": 2344116,
            "name": "Istanbul"
        },
        {
            "woeid": 638242,
            "name": "Berlin"
        },
        {
            "woeid": 44418,
            "name": "London"
        },
        {
            "woeid": 565346,
            "name": "Helsinki"
        },
        {
            "woeid": 560743,
            "name": "Dublin"
        },
        {
            "woeid": 9807,
            "name": "Vancouver"
        }
      ];
    
    return (
        <div>
            <Search />
            <Cities cities={default_cities}/>
        </div>
    );
}

export default Home;