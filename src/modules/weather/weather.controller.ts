import { Controller, Get } from '@nestjs/common';
import { RealIP } from 'nestjs-real-ip';
import WeatherService from './weather.service';

@Controller('/weather')
export default class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get('/current')
  async getCurrent(@RealIP() ip: string): Promise<any> {
    return this.weatherService.getCurrent(ip);
  }
}
