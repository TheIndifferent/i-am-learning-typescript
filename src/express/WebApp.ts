import * as express from "express";
import * as http from "http";
import {injectable} from "tsyringe";
// project imports:
import {RestApi} from "./api/RestApi";

const {PORT = 7000} = process.env;

@injectable()
export class WebApp {
  constructor(private restApi: RestApi) {
  }

  public startServer() {
    const router = express();
    router.use('/api', this.restApi.routes());

    const server = http.createServer(router);
    server.listen(PORT, this.serverStarted);
  }

  private serverStarted() {
    console.log(`Server started on port ${PORT}`);
  }
}
