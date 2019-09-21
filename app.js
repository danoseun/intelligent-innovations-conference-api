import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import { router } from './server/routes'


dotenv.config();

const app = express();
app.use(cors());
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);



const port = process.env.PORT || 2500;
app.listen(port, () => {
  console.log(`Server is live on PORT ${port}`);
});

export default app;