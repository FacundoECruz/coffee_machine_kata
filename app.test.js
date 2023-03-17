import translateOrder from "./app";

function generateOrder(drink, money, sugar, stick) {
  const order = {
    drink: drink,
    money: money,
    sugar: sugar,
    stick: stick,
  }
  return order
}

test('returns T:1:0 when 1 tea with 1 sugar and a stick', () => {
  const input = generateOrder('tea', 4, 1, true)

  const output = 'T:1:0'
  
  expect(translateOrder(input)).toBe(output);
});

test('returns H:: when 1 chocolate with no sugar and no stick', () => {
  const input = generateOrder('chocolate', 5, 0, false)
  
  const output = 'H::'
  
  expect(translateOrder(input)).toBe(output);
})

test('returns C:2:0 when 1 coffee with 2 sugar and a stick', () => {
  const input = generateOrder('coffee', 6, 2, true)
  
  const output = 'C:2:0'
  
  expect(translateOrder(input)).toBe(output);
})

test('returns error msg if the amount of money is not enough', () => {
  const input = generateOrder('coffee', 4, 2, true)

  const output = '2 euros missing'

  expect(translateOrder(input)).toBe(output)
})

test ('returns the serialized order output if the money is correct', () => {
  const input = generateOrder('tea', 5, 0, false)

  const output = 'T::'

  expect(translateOrder(input)).toBe(output)
})

test('returns O:: when 1 orange juice', () => {
  const input = generateOrder('juice', 6)

  const output = 'O::'

  expect(translateOrder(input)).toBe(output)
})