let fn = (arg: string) => {
  let a = arg + 1;
  return a.split("");
};

() => {
  fn("a");
  fn(1);
  fn([]);
  fn({});
};

/**
 * Primitive types
 * string
 * number
 * boolean
 * null
 * void (undefined)
 */

/**
 * Arrays
 * Array<string> === string[]
 * Array<?>
 * Set<number>
 * Dict<number>
 * Observable<boolean>
 */
() => {
  (arrString: Array<string>, arrNum: Array<number>, arrAny: Array<any>) => {
    arrString.forEach(item => item.split(""));
    arrNum.forEach(item => item + 1);
    arrAny.length === 4;
  };
};

/**
 * Interfaces
 */
() => {
  interface User {
    name: string;
  }

  interface SuperUser {
    name: string;
    isAdmin?: boolean;
  }

  (user: { name: string }) => {};
  (user: User) => {};

  (): SuperUser => {
    return { name: "" };
  };
  (): SuperUser => {
      return { name: "", isAdmin: false };
  };
  (): SuperUser => {
    return { name: "", isAdmin: 42 };
  };
};

/**
 * Type aliases
 */
() => {
  interface User {
    name: string;
  }
  type Users = Array<User>;
  (arg: Array<User>) => {};
  (arg: Users) => {};
};

/**
 * Functions
 */
() => {
  (cb: Function) => {
    cb();
    cb(42);
    cb(true, "", 0, null);
    cb() * cb();
  };

  (cb: () => void) => {
    cb();
    cb(42);
    cb(true, "", 0, null);
    cb() * cb();
  };

  (cb: (arg: any) => number) => {
    cb();
    cb(42);
    cb(true, "", 0, null);
    cb(42) * cb("42");
  };
};

/**
 * Union types === OR === Iloczyn zbiorów
 */
() => {
  (arg: string | number) => {
    arg + "1";
    arg - 1;
    arg.split("");

    if (typeof arg === "string") {
      arg.split("");
    }

    if (typeof arg === "number") {
      arg - 1;
    }
  };
  interface User { name: string }
  (user: User | null) => {
    if (user === null) {
      return;
    }

    user.name;
  };
};

/**
 * Return types
 */

() => {
  let x = (): number => 42;
  let fn2 = () => '';
  // wrong
  let x = (): number => {
    if (true) {
      return { key: 42 };
    }
    if (true) {
      return 42;
    }
    return [];
  };
  // Weryfikacja
  interface User { name: string}
  let fn5 = (): User => ({});
  let fn6 = (arg: number) => arg + 1;
  fn6(fn2());
};

/**
 * Classes
 */

() => {
  // definition
  class Item {
    private attr: string;
    private index = 42;
    private anyItems = [];
    private items: Array<string> = [];
    private anySet = new Set();
    private set = new Set<string>();

    public readonly attr2 = 42;

    constructor(public users: Array<number>) {
      this.users.push(42);
    }

    public method() {
      this.anyItems.push({});
      this.items.push({});

      this.users.push(43);
      this.privateMethod();
      this.protectedMethod();
    }

    private privateMethod() {}

    protected protectedMethod() {}
  }

  () => {
    //Usage
    const item = new Item([41]);
    item.users.length === 4;
    item.method();
    item.protectedMethod();
    item.privateMethod();

    let itemFn = (item: Item) => {
      item.method();
    };
  };

  () => {
    let userFn = (user: User) => {};
    interface User { name: string}
    //interfaces
    class NotUser implements User {}
    class User1 implements User {
      name: "";
      attr: 42;
    }
    const user1 = new User1();
    userFn({ name: "" });
    userFn(user1);
  };

  () => {
    // dziedziczenie
    class Item {
      name: string;
      method() {
        return 42;
      }
    }

    class SubItem extends Item {
      subMethod() {
        this.name.split('');
        this.method() * 1;
      }
    }
  }
};

/**
 * Callbacks
 */

() => {
  let arr = [1,2,34];
  let arr1 = arr.map(i => i - 1);

  let mapper = (i) => i + 1;
  let arr2 = arr.map(mapper);
}

/**
 * Enumerates
 */
() => {
  enum DayOfWeek {
    Monday = 'mon',
    Tuesday ='tue',
    Wednesday = 2,
    Thursday = 3,
    Friday,
    Saturday,
    Sunday,
  }

  let fn = (day: DayOfWeek) {}
  fn(DayOfWeek.Friday);
  fn('');
}

/**
 * Merge operator &
 *
 */

() => {
  interface X { x: string }
  interface Y { y: string }
  type XY = X & Y;
  let fn = (xy: XY) => {};
  fn({ x: '', y: '' });
  fn({ x: '' });
  fn({ y: '' });
}