import WeatherDto from '../dto/weather.dto';
import { Unit } from '../enum/units';
import WeatherUnitCalculatorInterface from '../interface/weather-unit-calculator.interface';

export default class KelvinCalculatorService implements WeatherUnitCalculatorInterface {
  constructor(private readonly weatherDto: WeatherDto) {}

  toFahrenheit(): void {
    this.weatherDto.unit = Unit.Fahrenheit;
    this.weatherDto.temperature = (this.weatherDto.temperature * 9) / 5 - 459.67;
  }

  toCelsius(): void {
    this.weatherDto.unit = Unit.Celsius;
    this.weatherDto.temperature = this.weatherDto.temperature - 273.15;
  }

  toKelvin(): void {
    // Do nothing
  }
}
