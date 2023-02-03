import { http } from 'services';

http.init({
  configFn: async () => ({
    baseURL: `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather`,
    // baseURL: `https://thingproxy.freeboard.io/fetch/https://api.openweathermap.org/data/2.5/weather`,
    Headers: {
      'Access-Control-Allow-Origin': '*'
    }
  })
});
