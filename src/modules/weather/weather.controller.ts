import { Controller, Get, Inject } from '@nestjs/common';
import { RealIP } from 'nestjs-real-ip';
import UserLocationDto from 'src/common/dto/user-location.dto';
import WeatherDto from 'src/common/dto/weather.dto';
import IpLocationProviderInterface from '../../common/interface/ip-location-provider.interface';
import WeatherService from './weather.service';

@Controller('/weather')
export default class WeatherController {
  constructor(
    @Inject('IpLocationProviderInterface')
    private readonly ipLocationProvider: IpLocationProviderInterface,
    private readonly weatherService: WeatherService,
  ) {}

  @Get('/current')
  async getCurrent(@RealIP() ip: string): Promise<WeatherDto> {
    const userLocationDto: UserLocationDto = await this.ipLocationProvider.getLocationByIp(ip);

    // Returns current weather for user's location
    return this.weatherService.getCurrent(userLocationDto);
  }
}
