import {Request, Response, NextFunction} from 'express'
import createError from 'http-errors'

export function normalizePort(val: string) : number | string | boolean {
    const port = parseInt(val, 10);
  
    if (isNaN(port)) {
      // named pipe
      return val;
    }
  
    if (port >= 0) {
      // port number
      return port;
    }
  
    return false;
}
  
export function onError(error: any) {
    if (error.syscall !== 'listen') {
      throw error;
    }
  
    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error('Hosting environment requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error('Hosting environment is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
}

export function ensureAuthentication(req : Request, res : Response, next: NextFunction) {
  return next();
  //@ts-ignore
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/');
}

export function ErrorHandler (err: any, req: Request, res: Response, next : NextFunction) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // send error as response
    const message = err.message;
    const status = err.status || 500
    res.json({ status, message });
}

export function pageNotFound (req: Request, res : Response, next: NextFunction) {
    next(createError(404));
}
  