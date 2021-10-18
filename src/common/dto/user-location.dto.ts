import GeoLocationDto from './geo-location.dto';

export default interface UserLocationDto {
  country: string;
  city?: string;
  geoLocation?: GeoLocationDto;
}
