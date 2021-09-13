import { Controller, Get, Inject } from '@nestjs/common';
import IpLocationProviderInterface from './providers/interfaces/ip-location.interface';
import { RealIP } from 'nestjs-real-ip';

@Controller('/location')
export default class LocationController {
  constructor(
    @Inject('IpLocationProviderInterface')
    private readonly ipLocationProvider: IpLocationProviderInterface,
  ) {}

  @Get()
  async getCity(@RealIP() ip: string): Promise<string> {
    // return this.ipLocationProvider.getCityByIp(ip);
    return new Promise((res) => res(ip));
  }
}
