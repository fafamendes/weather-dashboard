import React, { Component } from 'react';

import WeatherResults from "./WeatherResults";

export default class WeatherDashboard extends Component {
  render() {
    return (
        <div className="weather-dashboard">
            <div className="col">
                <WeatherResults 
                    name={this.props.data.name}
                    temp={this.props.data.main && (this.props.data.main.temp - 273).toFixed(1)}
                    countryCode={this.props.data.sys && this.props.data.sys.country}
                    weatherDescription={this.props.data.weather && this.props.data.weather[0].description}
                    cod={this.props.data.cod}
                />
            </div>
        </div>  
        );
  }
}

