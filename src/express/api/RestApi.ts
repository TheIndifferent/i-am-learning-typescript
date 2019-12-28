import {injectable} from "tsyringe";
import {Router} from "express";
// project imports:
import {RestApiV0} from "./v0/RestApiV0";

@injectable()
export class RestApi {
  constructor(private restApiV0: RestApiV0) {
  }

  public routes(): Router {
    const router: Router = Router();
    router.use("/v0", this.restApiV0.routesV0());
    return router;
  }
}
