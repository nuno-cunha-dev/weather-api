import WeatherDto from '../dto/weather.dto';
import { Unit } from '../enum/units';
import WeatherUnitCalculatorInterface from '../interface/weather-unit-calculator.interface';

export default class FahrenheitCalculatorService implements WeatherUnitCalculatorInterface {
  constructor(private readonly weatherDto: WeatherDto) {}

  toFahrenheit(): void {
    // Do nothing
  }

  toCelsius(): void {
    this.weatherDto.unit = Unit.Celsius;
    this.weatherDto.temperature = (this.weatherDto.temperature - 32) / 1.8;
  }

  toKelvin(): void {
    this.weatherDto.unit = Unit.Kelvin;
    this.weatherDto.temperature = ((this.weatherDto.temperature + 459.67) * 5) / 9;
  }
}
