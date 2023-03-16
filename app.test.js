import translateOrder from "./app";

test('returns T:1:0 when 1 tea with 1 sugar and a stick', () => {
  const input = {
    drink: 'tea',
    sugar: 1,
    stick: true,
    money: 4,
  }
  
  const output = 'T:1:0'
  
  expect(translateOrder(input)).toBe(output);
});

test('returns H:: when 1 chocolate with no sugar and no stick', () => {
  const input = {
    drink: 'chocolate',
    sugar: 0,
    stick: false,
    money: 5,
  }
  
  const output = 'H::'
  
  expect(translateOrder(input)).toBe(output);
})

test('returns C:2:0 when 1 coffee with 2 sugar and a stick', () => {
  const input = {
    drink: 'coffee',
    sugar: 2,
    stick: true,
    money: 6,
  }
  
  const output = 'C:2:0'
  
  expect(translateOrder(input)).toBe(output);
})

test('returns error msg if the amount of money is not enough', () => {
  const input = {
    drink: 'coffee',
    sugar: 2,
    stick: true,
    money: 4,
  }

  const output = '2 euros missing'

  expect(translateOrder(input)).toBe(output)
})