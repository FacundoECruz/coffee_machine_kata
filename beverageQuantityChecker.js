export function beverageQuantityChecker(drink) {
  const fakeDrinkDb = {
    tea: 3,
    coffee: 0,
    juice: 3,
    chocolate: 2,
  }[drink];
  console.log(fakeDrinkDb)
  const isEmpty = fakeDrinkDb === 0;
  return isEmpty
}
