import React, { Component } from 'react';

import FlatButton from "material-ui/FlatButton";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import baseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import TextField from "material-ui/TextField";

const styles = {
  searchContent: {
    textAlign: "center",
  },
}

export default class InputText extends Component {
  search(ev){
    ev.preventDefault();
    this.getWeatherInfo();
  }
  handleKeyPress(ev){
    if(ev.keyCode === 13){
      this.search(ev);
    }
  }
  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }
  render() {
    return (
            <div style={styles.searchContent} onKeyDown={this.handleKeyPress.bind(this)}>
                <TextField 
                  id="city-name"
                  hintText="Digite o nome da cidade" 
                  floatingLabelText="Cidade"
                />
                <FlatButton
                  label="Buscar"
                  primary={true}
                  onClick={this.search.bind(this)}
                />
            </div>
        );
  }

  getWeatherInfo() {
    let url = "http://api.openweathermap.org/data/2.5/weather?appid=698fc974aab6a529b81742dd467f37f5&q=" +
    document.getElementById("city-name").value;
    return fetch(url,  {
      method: 'GET',
      q: "simoes filho",
      appid: "698fc974aab6a529b81742dd467f37f5",
      
    })    
    .then((response) => response.json())
    .then((responseJson) => {
      this.props.searchCallback(responseJson);
    })
    .catch((error) => {
      console.error(error);
    });
  }
}


InputText.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};