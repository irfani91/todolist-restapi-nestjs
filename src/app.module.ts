import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LatihanModule } from './latihan/latihan.module';
import { TaskModule } from './task/task.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { SchoolModule } from './school/school.module';
import { MailerModule } from '@nestjs-modules/mailer'
import { HandlebarsAdapter } from "@nestjs-modules/mailer/dist/adapters/handlebars.adapter";
import { strict } from 'assert';

@Module({
  imports: [LatihanModule, TaskModule, PrismaModule, AuthModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public')
    }),
    SchoolModule,
    MailerModule.forRoot({
      transport: 'smtp://localhost:25',
      defaults: {
        from: 'noreply@emailsaya.com',
      },
      template: {
        dir: process.cwd() + '/mail',
        adapter: new HandlebarsAdapter(),
        options: {
          strict: false
        }
      }
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
