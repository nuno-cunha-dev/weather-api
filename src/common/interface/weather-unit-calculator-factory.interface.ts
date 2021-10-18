import WeatherDto from '../dto/weather.dto';
import WeatherUnitCalculatorInterface from './weather-unit-calculator.interface';

export default interface WeatherUnitCalculatorFactoryInterface {
  getCalculator(weatherDto: WeatherDto): WeatherUnitCalculatorInterface;
}
