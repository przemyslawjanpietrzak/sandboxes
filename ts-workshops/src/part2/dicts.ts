let dict: { [key: string]: string } = {};
dict.a = 'a';
dict['b'] = 'b';
dict['wpłynąłem na suchego przestwór oceany'] = 'c';
let s = dict['asddsad']

let optionalDict: { [key: string]: string | undefined } = {};
let strFn = (arg: string) => 42;
strFn(optionalDict.a); // error
