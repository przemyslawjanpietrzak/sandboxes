import { injectable } from "inversify";

@injectable()
export class B {
  private readonly name = 'b';
  public b() {
    console.log("b");
  }
}

