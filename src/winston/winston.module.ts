import { Module } from '@nestjs/common';
import * as winston from "winston";
import { winstonConfig } from './winston.config';

@Module({
    providers:[{
        provide:"winston",
        useFactory:()=>winston.createLogger(winstonConfig)
    }],
    exports:["winston"]
})
export class WinstonModule {}