import UserLocationDto from 'src/modules/location/dto/user-location.dto';

export default interface WeatherProviderInterface {
  getCurrentWeather(userLocationDto: UserLocationDto): Promise<any>;
}
