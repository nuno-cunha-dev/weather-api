import { Controller, Get, Inject } from '@nestjs/common';
import IpLocationProviderInterface from '../../common/interface/ip-location-provider.interface';
import { RealIP } from 'nestjs-real-ip';
import UserLocationDto from '../../common/dto/user-location.dto';

@Controller('/location')
export default class LocationController {
  constructor(
    @Inject('IpLocationProviderInterface')
    private readonly ipLocationProvider: IpLocationProviderInterface,
  ) {}

  @Get()
  async getCity(@RealIP() ip: string): Promise<UserLocationDto> {
    return this.ipLocationProvider.getLocationByIp(ip);
  }
}
