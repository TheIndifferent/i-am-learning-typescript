import "reflect-metadata";
import {container} from "tsyringe";
// project imports:
import {RestApi} from "./express/RestApi";

function main() {
  const restApi = container.resolve(RestApi);
  restApi.callDelegate();
}

main();
