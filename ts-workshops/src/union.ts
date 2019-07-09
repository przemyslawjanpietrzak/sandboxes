let unionFn = (arg: string | number) => {
  arg + '1';
  arg - 1;
  arg.split('');

  if (typeof arg === 'string') {
    arg.split('');
  }


  if (typeof arg === 'number') {
    arg - 1;
  }
}
