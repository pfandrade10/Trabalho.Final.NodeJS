import dotenv from 'dotenv';
import register from '@react-ssr/express/register';
dotenv.config();

import app from './app';
import { normalizePort, onError} from './utils/index';

(async () => {
  
  const port = normalizePort(process.env.PORT || '3000');
  console.log('Port assigned ->', port);

  await register(app);

  app.listen(port,() => console.log('Application started!'))
})();