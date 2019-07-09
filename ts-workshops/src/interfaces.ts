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

class NotUser implements User {}
class User1 implements User {
  name: '';
  attr: 42;
}
const user1 = new User1();
userFn({ name: '' });
userFn(user1);