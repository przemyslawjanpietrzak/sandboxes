import { isToken } from "typescript";

class Item {

  private attr: string;
  private index = 42;
  private anyItems = [];
  private items: Array<string> = [];
  private anySet = new Set();
  private set = new Set<string>();

  constructor(public users: Array<number>) {
    this.users.push(42);
  }

  public method() {
    this.anyItems.push({});
    this.items.push({});

    this.users.push(43);
  }

  protected protectedMethod() {}

  private privateMethod() {}

}

const item = new Item([41]);
item.method();
item.protectedMethod();
item.privateMethod();

let itemFn = (item: Item) => {
  item.method();
}
