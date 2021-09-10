import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import IPinfoWrapper from 'node-ipinfo';
import { IPinfo } from 'node-ipinfo/dist/src/common';
import IpLocationProviderInterface from './interfaces/ip-location.interface';

@Injectable()
export default class IpInfoProvider implements IpLocationProviderInterface {
  private readonly iPinfoWrapper: IPinfoWrapper;

  constructor(private readonly configService: ConfigService) {
    this.iPinfoWrapper = new IPinfoWrapper(
      this.configService.get<string>('IP_INFO_TOKEN'),
    );
  }

  public async getCityByIp(ip: string): Promise<string> {
    return this.iPinfoWrapper.lookupIp(ip).then((response: IPinfo) => {
      return response.city;
    });
  }
}
