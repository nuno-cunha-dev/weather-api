import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import IpLocationProviderInterface from './interfaces/ip-location-provider.interface';
import { IPinfoWrapper, IPinfo } from 'node-ipinfo';
import UserLocationDto from '../dto/user-location.dto';

enum IpInfoGeoLocation {
  Latitude = 0,
  Longitude = 1,
}

@Injectable()
export default class IpInfoProvider implements IpLocationProviderInterface {
  private readonly iPinfoWrapper: IPinfoWrapper;

  constructor(private readonly configService: ConfigService) {
    this.iPinfoWrapper = new IPinfoWrapper(
      this.configService.get<string>('ipInfoToken'),
    );
  }

  public async getLocationByIp(ip: string): Promise<UserLocationDto> {
    return this.iPinfoWrapper.lookupIp(ip).then((response: IPinfo) => {
      return this.buildUserLocationDto(response);
    });
  }

  private buildUserLocationDto(ipInfo: IPinfo): UserLocationDto {
    // Example "loc": "41.1496,-8.6110"
    // after the split, latitude is the first position
    // while longitude is in the second position of the array
    const geolocation = ipInfo.loc.replace(/\s+/g, '').split(',');

    return {
      country: ipInfo.countryCode,
      city: ipInfo.city,
      geoLocation: {
        lat: geolocation[IpInfoGeoLocation.Latitude],
        lon: geolocation[IpInfoGeoLocation.Longitude],
      },
    };
  }
}
