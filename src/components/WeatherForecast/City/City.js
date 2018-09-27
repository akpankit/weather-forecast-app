import React, { Component } from 'react';
import './infoTile.css';
import axios from 'axios';
import { withRouter, Link } from 'react-router-dom';
import WeatherInfo from './WeatherInfo'

class City extends Component {

state = {
    weatherData: null,
    cloud_icon: null,
    cloud_icon_desc: null
}

componentDidMount () {
    this.setState({loading: true})
    axios.get("http://localhost:8000/weather.php?command=location&woeid="+this.props.city.woeid)
        .then(response => {
            this.setState({
                loading: false,
                weatherData: response.data,
                cloud_icon: "https://www.metaweather.com/static/img/weather/"+response.data.consolidated_weather[0].weather_state_abbr+".svg",
                cloud_icon_desc: response.data.consolidated_weather[0].weather_state_name
            });
    });
}

render() {
      return ( 
            <React.Fragment>
                { this.state.weatherData == null ? <p> Loading weather data for {this.props.city.name}</p> :
                <Link to={ { pathname:"/weather/"+this.props.city.woeid} }>
                    <WeatherInfo 
                    weatherData={this.state.weatherData} 
                    cloud_icon={this.state.cloud_icon}
                    icon_desc={this.state.cloud_icon_desc}
                    name={this.props.city.name}
                    woeid={this.props.city.woeid} /> 
                </Link> 
                }
            </React.Fragment>
        );
    }
};

export default withRouter(City);