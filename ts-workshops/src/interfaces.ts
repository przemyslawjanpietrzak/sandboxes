interface User {
  name: string;
  attr?: number;
}

let userFn = (user: { name: string }) => {};
let userFn1 = (user: User) => {};

let returnUser = (): User => {
  return { name: '' };
}
let returnUser1 = (): User => {
  return { name: '', attr: 42 };
}
let returnUser2 = (): User => {
  return { name: '', attr: true };
}

