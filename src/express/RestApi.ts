import {injectable} from "tsyringe";
// project imports:
import {RestApiV0} from "./v0/RestApiV0";

@injectable()
export class RestApi {
  constructor(private restApiV0: RestApiV0) {
  }

  public callDelegate() {
    this.restApiV0.methodOne();
  }
}
