
const weatherDescription = {
    "clear sky": "Céu limpo",
    "few clouds": "Poucas núvens",
    "scattered clouds" :"Núvens dispersas",
    "broken clouds" :"Núvens quebradas",
    "shower rain" :"Pancadas de chuva",
    "thunderstorm" :"Tempestade",
    "rain" :"Chuva",
    "snow" :"Neve",
    "mist" :"Névoa",
};

const Utils = {
    translateConditions: (code) => {
        return weatherDescription[code];
    },
};

export default Utils;