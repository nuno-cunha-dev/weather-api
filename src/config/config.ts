export default () => ({
  ipInfoToken: process.env.IP_INFO_TOKEN,
  openWeatherMap: {
    apiKey: process.env.OPEN_WEATHER_MAP_API_KEY,
    apiUrl: 'https://api.openweathermap.org/data/2.5/weather',
    defaultUnit: 'metric',
  },
});
