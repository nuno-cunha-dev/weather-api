import { Module } from '@nestjs/common';
import LocationController from './location.controller';
import IpInfoProvider from './providers/ip-info.provider';

@Module({
  controllers: [LocationController],
  providers: [
    {
      provide: 'IpLocationProviderInterface',
      useClass: IpInfoProvider,
    },
  ],
})
export class LocationModule {}
