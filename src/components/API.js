const server = {
  serverUrl: 'https://api.openweathermap.org/data/2.5/weather',
  apiKey: '3fe949c0b26e50dd4a636123c3945f54',
  serverIconUrl: 'https://openweathermap.org/img/wn/',
  forecastServerUrl: 'https://api.openweathermap.org/data/2.5/forecast',
  metric: '&units=metric',

  weatherNowUrl : function(cityName){
    return `${this.serverUrl}?q=${cityName}&appid=${this.apiKey}${this.metric}`;
  },

  forecastUrl : function(cityName){
    return `${this.forecastServerUrl}?q=${cityName}&appid=${this.apiKey}${this.metric}`;
  },

  getWeatherIcon : function(code){
    return `${this.serverIconUrl}${code}@4x.png`
  }

}

export function getWeatherIcon(code){
  return server.getWeatherIcon(code);
}

export function getWeather(cityName, type){
  const _type = type + 'Url';
  const url = server[_type](cityName);
  return sendRequest(url);
}

function sendRequest(url) {
  try {
    return fetch(url).then((response) => response.json())
  } catch (error) {
    console.log('catched!' + error)
  }
}