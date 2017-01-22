import React, { Component } from 'react';

import DetailedWeatherConditions from "./DetailedWeatherConditions";
import GeneralWeatherConditions from "./GeneralWeatherConditions";

export default class WeatherDashboard extends Component {
  render() {
    return (
        <div>
            <div className="col">
                <GeneralWeatherConditions 
                    name={this.props.data.name}
                    weatherDescription={this.props.data.weather && this.props.data.weather[0].description}
                />
            </div>
            <div className="col">
                <DetailedWeatherConditions 
                    temp={this.props.data.main && this.props.data.main.temp - 273}
                />
            </div>
        </div>  
        );
  }
}

