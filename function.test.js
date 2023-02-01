const functions = require('./function');
test('add 2+ 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});
test('add 2+ 2 to equal 4', () => {
  expect(functions.add(2, 2)).not.toBe(6);
});
test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});
test('Should be falsy', () => {
  expect(functions.checkValue(5)).toBeTruthy();
});
test('user should be adarsh', () => {
  expect(functions.createUser()).toEqual({ firstName: 'adarsh', lastName: 'pathak' });
});
test('should be under 1600', () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600)
});
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});
test('admin should be in user name', () => {
  username = ['john', 'adarsh', 'admin'];
  expect(username).toContain('admin')
});

//  working with api and async data

test('user fectched name should be be leanne Graham', ()=>{
  expect.assertions(1);
  return functions.fetchUser().then(data=>{
    expect(data.name).toEqual('Leanne Graham')
  })
})

// promise working or Async Await

test('user fetched name should be be leanne Graham',async ()=>{
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual('Leanne Graham')
})