import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import WeatherUnitCalculatorFactory from 'src/common/factory/weather-unit-calculator.factory';
import OpenWeatherMapProvider from 'src/common/provider/open-weather-map.provider';
import IpInfoProvider from '../../common/provider/ip-info.provider';
import WeatherController from './weather.controller';
import WeatherService from './weather.service';

@Module({
  imports: [HttpModule],
  controllers: [WeatherController],
  providers: [
    {
      provide: 'IpLocationProviderInterface',
      useClass: IpInfoProvider,
    },
    {
      provide: 'WeatherProviderInterface',
      useClass: OpenWeatherMapProvider,
    },
    {
      provide: 'WeatherUnitCalculatorFactoryInterface',
      useClass: WeatherUnitCalculatorFactory,
    },
    WeatherService,
  ],
})
export class WeatherModule {}
