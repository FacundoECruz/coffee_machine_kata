import { fakeDrinkDb } from "./fakeDrinkDb";

export function beverageQuantityChecker(drink) {
  const currentDrink = fakeDrinkDb[drink];
  const isEmpty = currentDrink === 0;
  return isEmpty
}

