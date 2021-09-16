import { Inject, Injectable } from '@nestjs/common';
import IpLocationProviderInterface from '../location/providers/interfaces/ip-location-provider.interface';
import WeatherProviderInterface from './providers/interfaces/weather-provider.interface';

@Injectable()
export default class WeatherService {
  constructor(
    @Inject('IpLocationProviderInterface')
    private readonly ipLocationProvider: IpLocationProviderInterface,
    @Inject('WeatherProviderInterface')
    private readonly weatherProvider: WeatherProviderInterface,
  ) {}

  public async getCurrent(ip: string) {
    const userLocationDto = await this.ipLocationProvider.getLocationByIp(ip);
    return this.weatherProvider.getCurrentWeather(userLocationDto);
  }
}
