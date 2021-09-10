import { Module } from '@nestjs/common';
import { LocationModule } from './modules/location/location.module';

@Module({
  imports: [LocationModule],
})
export class AppModule {}
