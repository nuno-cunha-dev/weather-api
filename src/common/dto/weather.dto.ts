import { Units } from '../enum/units';

export default interface WeatherDto {
  temperature: number;
  unit: Units;
  description: string;
  city: string;
  icon: string;
}
