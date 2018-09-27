import React from 'react';
import City from './City/City';

const Cities = (props) => {
    let cities = [];
    if (props.cities) {
        cities = props.cities.map( (city, index) => {
            return (
                <City key={city.woeid} city={city} />
            );
        });
    }
    return cities;
}

export default Cities;