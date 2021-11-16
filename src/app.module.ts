import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ProdutosController} from "./produtos.controller";
import {ProdutosService} from "./produtos.service";
import {SequelizeModule} from "@nestjs/sequelize";
import {Produto} from "./produto.model";
require('dotenv').config()

@Module({
  imports: [
      SequelizeModule.forRoot({
        dialect: 'mysql',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        autoLoadModels: true,
        synchronize: true,
      }),
      SequelizeModule.forFeature([Produto])
  ],
  controllers: [AppController, ProdutosController],
  providers: [AppService, ProdutosService],
})
export class AppModule {}
