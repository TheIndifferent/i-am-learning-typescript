import {Router, Request, Response, NextFunction} from "express";

export class RestApiV0 {

  public routesV0(): Router {
    const router: Router = Router();
    router.get('/', this.get);
    return router;
  }

  private get(req: Request, res: Response, next: NextFunction) {
    console.log('GET method invoked!');
    res
    .status(200)
    .send({"message": "imagine that this is some JSON!"});
  }
}
