import { isStorageEmpty, notifyMissingDrink } from "./coffeeMachineCapabilities";

function translateOrder({
  drink,
  money,
  sugar = 0,
  stick = false,
  extraHot = false,
}) {
  const drinkCodes = {
    tea: "T",
    chocolate: "H",
    coffee: "C",
    juice: "O",
  };

  const checkDrink = drinkCodes[drink] || null;

  const prices = {
    tea: 4,
    chocolate: 5,
    coffee: 6,
    juice: 6,
  };

  const missingMoney = prices[drink]
    ? positiveOrZero(prices[drink] - money)
    : null;

  const missingMoneyMsg = `${missingMoney} euros missing`;
  const shortageMsg = `${drink} shortage, notified to the company`;

  let shortage = isStorageEmpty(drink)
  if(shortage) {
    notifyMissingDrink(drink)
  }

  const output =
    missingMoney !== 0
      ? `M:${missingMoneyMsg}`
      : shortage
      ? `M:${shortageMsg}`
      : `${checkDrink}${extraHot ? "h" : ""}:${sugar || ""}:${
          stick ? "0" : ""
        }`;

  return output || "No drink received";

  function positiveOrZero(value) {
    return Math.max(value, 0);
  }
}

export default translateOrder;
