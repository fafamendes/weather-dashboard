import React, { Component } from 'react';

import Search from "./Search";
import WeatherDashboard from "./WeatherDashboard";

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
            <div>
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

