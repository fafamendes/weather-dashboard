import React, { Component } from 'react';

import WeatherDashboardContainer from "./WeatherDashboardContainer";
import "../App.css";

class App extends Component {
  render() {
    return (
        <div>
          <WeatherDashboardContainer/>
        </div>
      );
  }
}

export default App;
