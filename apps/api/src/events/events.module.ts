import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { NotificationsGateway } from './notifications.gateway';

@Module({
  // SECURITY: no fallback — startup validation in main.ts ensures JWT_SECRET is set
  imports: [JwtModule.register({ secret: process.env.JWT_SECRET })],
  providers: [EventsService, NotificationsGateway],
  controllers: [EventsController],
  exports: [NotificationsGateway],
})
export class EventsModule {}
