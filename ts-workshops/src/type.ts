
let fn = (arg) => {
  let a = arg + 1;
  return a.split('');
}

fn('a');
fn(1);
fn(null);
fn(undefined);

