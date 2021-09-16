import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import IpInfoProvider from '../location/providers/ip-info.provider';
import OpenWeatherMapProvider from './providers/open-weather-map.provider';
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
    WeatherService,
  ],
})
export class WeatherModule {}
