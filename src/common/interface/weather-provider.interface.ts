import UserLocationDto from 'src/common/dto/user-location.dto';
import WeatherDto from '../dto/weather.dto';

export default interface WeatherProviderInterface {
  getCurrentWeather(userLocationDto: UserLocationDto): Promise<WeatherDto>;
}
