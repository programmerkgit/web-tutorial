import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { BlogModule } from './blog/blog.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';
import config = require('./db/config/config');

const sequelizeOption = config[ process.env.NODE_NV || 'development' ];

@Module({
  imports: [
    SequelizeModule.forRoot({
      ...sequelizeOption,
      models: [],
    }),
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '..', 'static'),
      exclude: [ '/api*' ],
    }),
    BlogModule,
  ],
  controllers: [ AppController ],
  providers: [ AppService ],
})
export class AppModule {
}
