import React, { Component } from 'react';

export default class DetailedWeatherConditions extends Component {
  render() {
    return (
        <div>
            <div>
              {this.props.temp && this.props.temp.toFixed(1) + "°C"}
            </div>
        </div>
      );
  }
}
