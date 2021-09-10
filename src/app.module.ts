import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LocationModule } from './modules/location/location.module';

@Module({
  imports: [
    LocationModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
