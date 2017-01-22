import React, { Component } from 'react';

import Search from "./Search";
import WeatherDashboard from "./WeatherDashboard";

const styles = {
    weatherDashboardContainer: {padding: "0 12%"},
}

export default class WeatherDashboardContainer extends Component {

  constructor(){
      super();
      this.state = {
          data: {},
      }
  }   

  searchCallback(data){
      this.setState(
          {
            data,
          }
        );
      }

  render() {
    return (
            <div style={styles.weatherDashboardContainer}>
                <div>
                    <Search searchCallback={this.searchCallback.bind(this)}/>
                </div>
                <div>
                    <WeatherDashboard 
                        data={this.state.data}
                    />
                </div>
            </div>
        );
  }
}

