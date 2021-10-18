import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom, map } from 'rxjs';
import UserLocationDto from 'src/common/dto/user-location.dto';
import WeatherDto from 'src/common/dto/weather.dto';
import { Unit } from 'src/common/enum/units';
import WeatherProviderInterface from 'src/common/interface/weather-provider.interface';
import OpenWeatherMapResponse from '../response/open-weather-map.response';

@Injectable()
export default class OpenWeatherMapProvider implements WeatherProviderInterface {
  private readonly openWeatherMapConfig: any;

  constructor(private readonly httpService: HttpService, private readonly configService: ConfigService) {
    this.openWeatherMapConfig = this.configService.get<string>('openWeatherMap');
  }

  public async getCurrentWeather(userLocationDto: UserLocationDto): Promise<WeatherDto> {
    return this.requestExternalProvider(userLocationDto).then((openWeatherMapResponse) => {
      return {
        temperature: openWeatherMapResponse.main.temp,
        unit: Unit.Kelvin,
        description: openWeatherMapResponse.weather[0].description,
        city: openWeatherMapResponse.name,
        icon: openWeatherMapResponse.weather[0].icon,
      };
    });
  }

  private async requestExternalProvider(userLocationDto: UserLocationDto): Promise<OpenWeatherMapResponse> {
    return lastValueFrom(
      this.httpService
        .get(this.openWeatherMapConfig.apiUrl, {
          params: {
            lat: userLocationDto.geoLocation.lat,
            lon: userLocationDto.geoLocation.lon,
            appid: this.openWeatherMapConfig.apiKey,
          },
        })
        .pipe(map((response) => response.data)),
    );
  }
}
