export default interface IpLocationProviderInterface {
  getCityByIp(ip: string): Promise<string>;
}
