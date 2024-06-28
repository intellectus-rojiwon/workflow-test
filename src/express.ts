import * as bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';

export const app = express();

app.use(bodyParser.json(), cookieParser());

app.get('/test', (_, res) =>  res.json(process.env))

if(process.env['NODE_ENV'] !== 'production'){
    throw Error('환경 변수 적용 테스트')
}