import React, { Component } from 'react';

import Utils from "../Utils";

export default class GeneralWeatherConditions extends Component {
  render() {
    return (
        <div>
            <div>
              {Utils.translateConditions(this.props.weatherDescription)}
            </div>
            <div>
              {this.props.name}
            </div>   
        </div>
      );
  }
}
