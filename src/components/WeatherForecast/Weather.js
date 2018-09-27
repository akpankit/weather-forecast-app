import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import FullWeatherInfo from '../WeatherForecast/City/WeatherInfoFull';

class Weather extends PureComponent {
    state = {
        woeid: (typeof this.props.match.params.woeid === 'string' ) ? this.props.match.params.woeid : null,
    }

    componentDidMount = () => {
        axios.get("http://localhost:8000/weather.php?command=location&woeid="+this.state.woeid)
        .then(response => {
            this.setState({
                weatherData: response.data
            });
        });
    }
    
    render() {
        let days = null;
        if (typeof this.state.weatherData !== 'undefined') {
            days =  (
                <div>
                    <h3 style={ {"marginLeft": "20px"} }>Weather details for {this.state.weatherData.title} </h3>
                    { this.state.weatherData.consolidated_weather.map( (info, index) => {
                        return (
                            <FullWeatherInfo data={info} key={index}/>
                        )
                    })}
                </div>
            );
        }

        if (days) {
            return days;
        }

        return ('');
    }
}

export default withRouter(Weather);