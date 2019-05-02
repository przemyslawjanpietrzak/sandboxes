import { Container } from "inversify";
import { A } from "./a";
import { B } from "./b";

let container = new Container();
container  .bind<A>(A).toSelf();
container  .bind<B>(B).toSelf();

export default container;

