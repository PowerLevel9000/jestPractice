const reverseString = require('./reverse-string');
test('Reversed of "Ram"', ()=>{
    expect(reverseString('Ram')).toBe('maR')
})
test('Reversed of "Mohan"', ()=>{
    expect(reverseString('Mohan')).toBe('nahoM')
})
test('Reversed of "Great"', ()=>{
    expect(reverseString('Great')).toBe('taerG')
})
test('Reversed of "Hello!"', ()=>{
    expect(reverseString('Hello!')).toBe('!olleH')
})