import UserLocationDto from '../../dto/user-location.dto';

export default interface IpLocationProviderInterface {
  getLocationByIp(ip: string): Promise<UserLocationDto>;
}
