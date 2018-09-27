import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class FullWeatherInfo extends Component {
    render() {    
        let cloud_icon;
        let cloud_icon_desc; 
        let info = this.props.data;   
        let date = new Date(info.applicable_date);
        cloud_icon = "https://www.metaweather.com/static/img/weather/"+info.weather_state_abbr+".svg";
        cloud_icon_desc = info.weather_state_name;
        return (  
            <div className="info-tile">
                <center><b>{ date.toLocaleString('en-us', {  weekday: 'long' }) }</b></center>
                <img src={cloud_icon} alt={cloud_icon_desc} ></img>
                <section>
                    <ul>
                        <li>Date: </li>
                        <b>{info.applicable_date}</b>
                        <li>Temprature: </li><b>{info.the_temp.toFixed(2)}</b><br/>
                        <li>Maximum Temprature: </li><b>{info.max_temp.toFixed(2)}</b><br/>
                        <li>Minimum Temprature: </li><b>{info.min_temp.toFixed(2)}</b><br/> 
                    </ul>
                </section>
            </div>
        )
    }
}

export default withRouter(FullWeatherInfo);