import "reflect-metadata";
import {container} from "tsyringe";
// project imports:
import {WebApp} from "./express/WebApp";

function main() {
  const webApp = container.resolve(WebApp);
  webApp.startServer();
}

main();
