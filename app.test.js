import translateOrder from "./app";

test('returns T:1:0 when 1 tea with 1 sugar and a stick', () => {
  const input = {
    drink: 'tea',
    sugar: 1,
    stick: true,
  }

  const output = 'T:1:0'

  expect(translateOrder(input)).toBe(output);
});

test('returns H:: when 1 chocolate with no sugar and no stick', () => {
  const input = {
    drink: 'chocolate',
    sugar: 0,
    stick: false,
  }

  const output = 'H::'

  expect(translateOrder(input)).toBe(output);
})