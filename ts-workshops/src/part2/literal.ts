interface Item {
  name: 'item';
  id: 42;
  exist: true;
}

let returnItem1 = (): Item => ({
  name: 'item',
  id: 42,
  exist: true,
})

let returnItem2 = (): Item => ({})

let returnItem3 = (): Item => ({
  name: 'item',
  exist: true,
});

let returnItem4 = (exist: boolean): Item => ({
  name: 'item',
  id: 42,
  exist,
})