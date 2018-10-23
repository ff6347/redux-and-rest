import * as express from 'express';
import * as helmet from 'helmet';
import * as cors from 'cors';
import * as morgan from 'morgan';
import * as routes from './routes';
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
//@ts-ignore
app.use('/', routes);
app.listen(PORT, ()=>{
  console.log(`REST API is listening on http://localhost:${PORT}`);
});
