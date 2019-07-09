const arr = [1,2,3,4,5];
const arrStr = ['', '', '', ''];

let arr1 = arr.map(item => item - 1);
let arr2 = arr.map(item => item + '1');
let arrStr1 = arrStr.map(item => item - 1);

let mapper = item => item -1;
arr.map(mapper);
arrStr.map(mapper);

let fn1 = (arg) => arg;
const stringfn = (arg: string) => arg;
const genericFn = <T>(arg: T) => arg;