import { Container } from "inversify";

let container = new Container();
container.bind<A>(A).toSelf();
container.bind<B>(B).toSelf();

export default container;

