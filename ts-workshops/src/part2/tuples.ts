type MyTuple = [string, number, boolean];

let myTupleFn = (arg: MyTuple) => {
  arg[0].split('')
  arg[1] - 1;
  !arg[2];
  let l = arg.length;
};
myTupleFn(['', 0, false]);
myTupleFn(['test', 42, true]);
myTupleFn(['', 0]);
myTupleFn([]);

