const Calculator = require("./calculator");

const newCalculator = new Calculator;

describe('Addition', ()=>{
    test('0+1 should be 1',()=>{
       expect(newCalculator.add(0,1)).toBe(1);
    });
    test('10+1 should be 11',()=>{
       expect(newCalculator.add(10,1)).toBe(11);
    });
    test('0+11 should be 11',()=>{
       expect(newCalculator.add(0,11)).toBe(11);
    });
    test('40+100 should be 140',()=>{
       expect(newCalculator.add(40,100)).toBe(140);
    });
});
describe('Subtraction', ()=>{
    test('0-1 should be -1',()=>{
       expect(newCalculator.subtract(0,1)).toBe(-1);
    });
    test('10-1 should be 9',()=>{
       expect(newCalculator.subtract(10,1)).toBe(9);
    });
    test('0-11 should be -11',()=>{
       expect(newCalculator.subtract(0,11)).toBe(-11);
    });
    test('40-100 should be -60',()=>{
       expect(newCalculator.subtract(40,100)).toBe(-60);
    });
});
describe('Multiplications', ()=>{
    test('0x1 should be 0',()=>{
       expect(newCalculator.multiply(0,1)).toBe(0);
    });
    test('10x1 should be 11',()=>{
       expect(newCalculator.multiply(10,1)).toBe(10);
    });
    test('0x11 should be 0',()=>{
       expect(newCalculator.multiply(0,11)).toBe(0);
    });
    test('40x100 should be 4000',()=>{
       expect(newCalculator.multiply(40,100)).toBe(4000);
    });
});
describe('Division', ()=>{
    test('1/1 should be 1',()=>{
       expect(newCalculator.divide(1,1)).toBe(1);
    });
    test('10/1 should be 10',()=>{
       expect(newCalculator.divide(10,1)).toBe(10);
    });
    test('99/11 should be 9',()=>{
       expect(newCalculator.divide(99,11)).toBe(9);
    });
    test('5000/100should be 50',()=>{
       expect(newCalculator.divide(5000,100)).toBe(50);
    });
});