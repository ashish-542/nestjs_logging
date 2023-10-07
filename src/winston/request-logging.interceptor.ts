import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import {Request,Response} from "express";
import { tap } from "rxjs";
import { Logger } from "winston";
@Injectable()
export class RequestLoggingInterceptor implements NestInterceptor{
    constructor(private readonly logger:Logger){}
    intercept(context:ExecutionContext,next:CallHandler){
        const ctx=context.switchToHttp();
        const request=ctx.getRequest<Request>();
        const response=ctx.getResponse<Response>();
        const startTime=Date.now();

        return next.handle().pipe(
            tap(()=>{
                const endTime=Date.now();
                const elapsed=endTime-startTime;
                const logEntry={
                    method:request.method,
                    url:request.url,
                    statusCode:response.statusCode,
                    elapsed:`${elapsed}ms`,
                    level:"info",
                    message:"log msg"
                }
                this.logger.log(logEntry);
            })
        )
    }
}