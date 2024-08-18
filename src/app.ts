import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import httpStatus from 'http-status';
import cookieParser from 'cookie-parser';
// import router from './app/routes';

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
// app.use(
//   cors({
//     origin: 'https://pet-adoption16247.vercel.app',
//     credentials: true,
//   }),
// );

app.get('/', (req: Request, res: Response) => {
  res.send('Hellow Sports store');
});
// app.use('/', router);
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'API not found',
    error: {
      path: req.originalUrl,
      message: 'Your requested url not found',
    },
  });
});

export default app;
