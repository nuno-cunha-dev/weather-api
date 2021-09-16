import GeoLocation from './geo-location.dto';

export default interface UserLocationDto {
  country: string;
  city?: string;
  geoLocation?: GeoLocation;
}
