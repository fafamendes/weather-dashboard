import React, { Component } from 'react';

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
  render() {
    return (
            <div onKeyDown={this.handleKeyPress.bind(this)}>
                <input type="text" id="city-name" placeholder="Digite o nome da cidade"/>
                <button onClick={this.search.bind(this)}>Buscar</button>
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

