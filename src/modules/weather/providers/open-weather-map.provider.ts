import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom, map } from 'rxjs';
import UserLocationDto from 'src/modules/location/dto/user-location.dto';
import WeatherProviderInterface from './interfaces/weather-provider.interface';

@Injectable()
export default class OpenWeatherMapProvider
  implements WeatherProviderInterface
{
  private readonly apiKey: string;
  private readonly apiUrl: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.apiKey = this.configService.get<string>('openWeatherMapApiKey');
    this.apiUrl = this.configService.get<string>('openWeatherMapApiUrl');
  }

  public async getCurrentWeather(
    userLocationDto: UserLocationDto,
  ): Promise<any> {
    return lastValueFrom(
      this.httpService
        .get(this.apiUrl, {
          params: {
            lat: userLocationDto.geoLocation.lat,
            lon: userLocationDto.geoLocation.lon,
            appid: this.apiKey,
          },
        })
        .pipe(map((response) => response.data)),
    );
  }
}
