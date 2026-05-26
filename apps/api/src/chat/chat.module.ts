import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ChatGateway } from './chat.gateway';
import { ChatService } from './chat.service';
import { LiveModule } from '../live/live.module';
import { JobsModule } from '../jobs/jobs.module';

@Module({
  imports: [
    LiveModule,
    JobsModule,
    // SECURITY: no fallback — startup validation in main.ts ensures JWT_SECRET is set
    JwtModule.register({ secret: process.env.JWT_SECRET }),
  ],
  providers: [ChatGateway, ChatService],
  exports: [ChatService],
})
export class ChatModule {}
