import {injectable} from "tsyringe";
import * as http from "http";
import * as express from "express";
// project imports:
import {RestApiV0} from "./v0/RestApiV0";

const {PORT = 7000} = process.env;

@injectable()
export class RestApi {
  constructor(private restApiV0: RestApiV0) {
  }

  public startServer() {
    const router = express();
    router.use('/v0', this.restApiV0.routesV0());

    const server = http.createServer(router);
    server.listen(PORT, this.serverStarted);
  }

  private serverStarted() {
    console.log(`Server started on port ${PORT}`);
  }
}
