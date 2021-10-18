import GeoLocationDto from 'src/common/dto/geo-location.dto';

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface WeatherInfo {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

interface CloudInfo {
  all: number;
}

interface SystemInfo {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export default interface OpenWeatherMapResponse {
  coord: GeoLocationDto;
  weather: Weather[];
  base: string;
  main: WeatherInfo;
  visibility: number;
  wind: Wind;
  clouds: CloudInfo;
  dt: number;
  sys: SystemInfo;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
