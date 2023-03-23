import translateOrder from "./app";
import makeReport from "./makeReport"
import checkAvailability from "./checkAvailability";
import { beverageQuantityChecker } from "./beverageQuantityChecker";
import emailNotifier from "./emailNotifier";

jest.mock('./beverageQuantityChecker')

function generateOrder(drink, money, sugar, stick, extraHot) {
  const order = {
    drink: drink,
    money: money,
    sugar: sugar,
    stick: stick,
    extraHot: extraHot,
  };
  return order;
}

test("returns T:1:0 when 1 tea with 1 sugar and a stick", () => {
  const input = generateOrder("tea", 4, 1, true);

  const output = "T:1:0";

  expect(translateOrder(input)).toBe(output);
});

test("returns H:: when 1 chocolate with no sugar and no stick", () => {
  const input = generateOrder("chocolate", 5, 0, false);

  const output = "H::";

  expect(translateOrder(input)).toBe(output);
});

test("returns C:2:0 when 1 coffee with 2 sugar and a stick", () => {
  const input = generateOrder("coffee", 6, 2, true);

  const output = "C:2:0";

  expect(translateOrder(input)).toBe(output);
});

test("returns error msg if the amount of money is not enough", () => {
  const input = generateOrder("chocolate", 3, 2, true);

  const output = "2 euros missing";

  expect(translateOrder(input)).toBe(output);
});

test("returns the serialized order output if the money is correct", () => {
  const input = generateOrder("tea", 5, 0, false);

  const output = "T::";

  expect(translateOrder(input)).toBe(output);
});

test("returns O:: when 1 orange juice", () => {
  const input = generateOrder("juice", 6);

  const output = "O::";

  expect(translateOrder(input)).toBe(output);
});

test("returns Ch:: when extra hot coffee with no sugar", () => {
  const input = generateOrder("coffee", 6, 0, false, true);

  const output = "Ch::";

  expect(translateOrder(input)).toBe(output);
});

test("Hh:1:0 when extra hot chocolate with one sugar and a stick)", () => {
  const input = generateOrder("chocolate", 6, 1, true, true);

  const output = "Hh:1:0";

  expect(translateOrder(input)).toBe(output);
});

test("returns a report how many of each drink was sold and the total amount of money earned", () => {
  const result = makeReport();
  expect(result).toHaveProperty('coffee');
  expect(result).toHaveProperty('juice');
  expect(result).toHaveProperty('chocolate');
  expect(result).toHaveProperty('tea');
  expect(result).toHaveProperty('earnedMoney');
});

test("indicates me the shortage (if any) and that a notification has been sent", () => {
  const drink = 'coffee'
  // beverageQuantityChecker.mockReturnValueOnce(`${drink} shortage, notification sent to the company`)
  const notifEmptyDrink = checkAvailability(drink)
  expect(notifEmptyDrink).toBe(`${drink} shortage, notification sent to the company`)
})