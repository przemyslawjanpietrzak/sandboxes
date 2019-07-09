let fn2 = () => 42;
let fn3 = (): number => 42;
let fn4 = () => {
  if (true) {
    return { key: 42 };
  }
  if (true) {
    return 42;
  }
  return [];
}
let fn5 = (): any => ({});

let fn6 = (arg: number) => arg + 1;
fn6(fn2());
fn6(fn3());
fn6(fn4());
fn6(fn5());
