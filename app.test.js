import translateOrder from "./app";

function generateOrder(drink, sugar, stick, money) {
  const order = {
    drink: drink,
    sugar: sugar,
    stick: stick,
    money: money,
  }
  return order
}

test('returns T:1:0 when 1 tea with 1 sugar and a stick', () => {
  const input = generateOrder('tea', 1, true, 4)

  const output = 'T:1:0'
  
  expect(translateOrder(input)).toBe(output);
});

test('returns H:: when 1 chocolate with no sugar and no stick', () => {
  const input = generateOrder('chocolate', 0, false, 5)
  
  const output = 'H::'
  
  expect(translateOrder(input)).toBe(output);
})

test('returns C:2:0 when 1 coffee with 2 sugar and a stick', () => {
  const input = generateOrder('coffee', 2, true, 6)
  
  const output = 'C:2:0'
  
  expect(translateOrder(input)).toBe(output);
})

test('returns error msg if the amount of money is not enough', () => {
  const input = generateOrder('coffee', 2, true, 4)

  const output = '2 euros missing'

  expect(translateOrder(input)).toBe(output)
})

test ('returns the serialized order output if the money is correct', () => {
  const input = generateOrder('tea', 0, false, 5)

  const output = 'T::'

  expect(translateOrder(input)).toBe(output)
})