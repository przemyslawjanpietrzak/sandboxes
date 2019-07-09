interface GenInter {
  attr: string;
}
type GenAttr = GenInter['attr'];

let genericFn = <T>(arg: T) => arg;

let genericFn1 = <T>(arg: T) => {
  return arg.attribute;
};
let genericFn2 = <T extends { attribute: any }>(arg: T): T['attribute'] => {
  return arg.attribute;
};
let genericArgument = { attribute: 42 };
let x = genericFn2(genericArgument);

