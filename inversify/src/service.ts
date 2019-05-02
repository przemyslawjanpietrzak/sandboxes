import container from "./container";
import { injectable, inject } from "inversify";

import { A } from "./a";
import { B } from "./b";

@injectable()
class Service {

  constructor(@inject(A) private a: A, @inject(B) private  b: B) {
  }

  public c() {
    this.a.a();
    this.b.b();
  }
}

export const service: Service = container.resolve<Service>(Service);

