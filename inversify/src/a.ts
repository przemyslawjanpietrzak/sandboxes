import { injectable } from "inversify";

@injectable()
export class A {
  private readonly name = 'a';
  public a() {
    console.log("a");
  }
}

