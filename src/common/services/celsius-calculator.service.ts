import WeatherDto from '../dto/weather.dto';
import { Unit } from '../enum/units';
import WeatherUnitCalculatorInterface from '../interface/weather-unit-calculator.interface';

export default class CelsiusCalculatorService implements WeatherUnitCalculatorInterface {
  constructor(private readonly weatherDto: WeatherDto) {}

  toFahrenheit(): void {
    this.weatherDto.unit = Unit.Fahrenheit;
    this.weatherDto.temperature = this.weatherDto.temperature * 1.8 + 32;
  }

  toCelsius(): void {
    // Do nothing
  }

  toKelvin(): void {
    this.weatherDto.unit = Unit.Kelvin;
    this.weatherDto.temperature = this.weatherDto.temperature + 273.15;
  }
}
