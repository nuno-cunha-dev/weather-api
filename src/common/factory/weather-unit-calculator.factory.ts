import { Injectable } from '@nestjs/common';
import WeatherDto from '../dto/weather.dto';
import { Unit } from '../enum/units';
import WeatherUnitCalculatorFactoryInterface from '../interface/weather-unit-calculator-factory.interface';
import WeatherUnitCalculatorInterface from '../interface/weather-unit-calculator.interface';
import CelsiusCalculatorService from '../services/celsius-calculator.service';
import FahrenheitCalculatorService from '../services/fahrenheit-calculator.service';
import KelvinCalculatorService from '../services/kelvin-calculator.service';

@Injectable()
export default class WeatherUnitCalculatorFactory implements WeatherUnitCalculatorFactoryInterface {
  public getCalculator(weatherDto: WeatherDto): WeatherUnitCalculatorInterface {
    switch (weatherDto.unit) {
      case Unit.Fahrenheit:
        return new FahrenheitCalculatorService(weatherDto);
      case Unit.Celsius:
        return new CelsiusCalculatorService(weatherDto);
      case Unit.Kelvin:
        return new KelvinCalculatorService(weatherDto);
      default:
        throw new Error('Weather unit calculator not found');
    }
  }
}
