import { Injectable } from '@nestjs/common';
import IPinfoWrapper from 'node-ipinfo';
import { IPinfo } from 'node-ipinfo/dist/src/common';
import IpLocationProviderInterface from './interfaces/ip-location.interface';

const token = '08fadb4ea55719';

@Injectable()
export default class IpInfoProvider implements IpLocationProviderInterface {
  private readonly iPinfoWrapper: IPinfoWrapper;

  constructor() {
    this.iPinfoWrapper = new IPinfoWrapper(token);
  }

  public async getCityByIp(ip: string): Promise<string> {
    return this.iPinfoWrapper.lookupIp(ip).then((response: IPinfo) => {
      return response.city;
    });
  }
}
