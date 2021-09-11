import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import IpLocationProviderInterface from './interfaces/ip-location.interface';
import { IPinfoWrapper, IPinfo } from 'node-ipinfo';

@Injectable()
export default class IpInfoProvider implements IpLocationProviderInterface {
  private readonly iPinfoWrapper: IPinfoWrapper;

  constructor(private readonly configService: ConfigService) {
    this.iPinfoWrapper = new IPinfoWrapper(
      this.configService.get<string>('ipInfoToken'),
    );
  }

  public async getCityByIp(ip: string): Promise<string> {
    return this.iPinfoWrapper.lookupIp(ip).then((response: IPinfo) => {
      return response.city;
    });
  }
}
