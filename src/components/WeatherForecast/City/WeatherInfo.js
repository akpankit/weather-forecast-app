import React from 'react';

 const WeatherInfo = (props) => {
     return (
        <div className="info-tile">
            <img src={props.cloud_icon} alt={props.cloud_icon_desc}></img>
            <section>
                <ul>
                    <li>City Name: </li><b>{props.name}</b><br/>
                    <li>Temprature: </li><b>{props.weatherData.consolidated_weather[0].the_temp.toFixed(2)}</b><br/>
                    <li>Maximum Temprature: </li><b>{props.weatherData.consolidated_weather[0].max_temp.toFixed(2)}</b><br/>
                    <li>Minimum Temprature: </li><b>{props.weatherData.consolidated_weather[0].min_temp.toFixed(2)}</b><br/> 
                </ul>
            </section>
        </div>
     )
 }


export default WeatherInfo;