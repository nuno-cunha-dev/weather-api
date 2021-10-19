import { Inject, Injectable } from '@nestjs/common';
import WeatherDto from 'src/common/dto/weather.dto';
import WeatherProviderInterface from 'src/common/interface/weather-provider.interface';
import WeatherUnitCalculatorFactoryInterface from 'src/common/interface/weather-unit-calculator-factory.interface';
import UserLocationDto from '../../common/dto/user-location.dto';

@Injectable()
export default class WeatherService {
  constructor(
    @Inject('WeatherProviderInterface')
    private readonly weatherProvider: WeatherProviderInterface,
    @Inject('WeatherUnitCalculatorFactoryInterface')
    private readonly weatherUnitCalculatorFactory: WeatherUnitCalculatorFactoryInterface,
  ) {}

  public async getCurrent(userLocationDto: UserLocationDto): Promise<WeatherDto> {
    return this.weatherProvider.getCurrentWeather(userLocationDto).then((weatherDto: WeatherDto) => {
      // Convert allways to celsius (for now)
      this.weatherUnitCalculatorFactory.getCalculator(weatherDto).toCelsius();

      // Remove decimal places from temperature
      weatherDto.temperature = Math.floor(weatherDto.temperature);

      // Capitalize first letter
      weatherDto.description = weatherDto.description.charAt(0).toUpperCase() + weatherDto.description.slice(1);

      return weatherDto;
    });
  }
}
