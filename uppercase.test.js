const upperCase = require("./uppercase")

test('capitalize "human"',()=>{
    expect(upperCase("human")).toBe('HUMAN');
});
test('capitalize "demon"',()=>{
    expect(upperCase("demon")).toBe('DEMON');
});
test('capitalize "god"',()=>{
    expect(upperCase("god")).toBe('GOD');
});
test('capitalize "human"',()=>{
    expect(upperCase("immortal")).toBe('IMMORTAL');
});