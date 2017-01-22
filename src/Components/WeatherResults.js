import React, { Component } from 'react';

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import baseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import Utils from "../Utils";

export default class WeatherResults extends Component {
  constructor(){
    super();
    this.state={
      visibility: "hidden",
    }
  }

  componentWillReceiveProps(nextProps){
    nextProps.cod === 200 ? this.setState({visibility: "visible"}) : this.setState({visibility: "hidden"});
  }

  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }

  render() {
    return (
      <div style={{visibility: this.state.visibility}}>
        <Card>
          <CardHeader
            title={this.props.name}
            subtitle={Utils.getCountryCodeName(this.props.countryCode)}
            />
          <CardMedia
            overlay={
              <CardTitle 
                title={Utils.translateConditions(this.props.weatherDescription)}
                subtitle={this.props.temp && this.props.temp + "°C"} 
                />
              }
            >
            <img alt="weather" src="http://www.smartplanet.com.br/wp-content/uploads/2016/07/10-Finlandia.jpg" />
          </CardMedia>
          <CardTitle 
            title="" 
            subtitle="Card subtitle" />
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
          <CardActions>

          </CardActions>
        </Card>
      </div>
    );
  }
}

WeatherResults.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};
