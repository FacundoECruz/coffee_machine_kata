import {
  isStorageEmpty,
  notifyMissingDrink,
} from "./utils/coffeeMachineCapabilities";
import {absolute, isNegative} from "./utils/mathUtils";

const drinkCodes = {
  tea: "T",
  chocolate: "H",
  coffee: "C",
  juice: "O",
};

const prices = {
  tea: 4,
  chocolate: 5,
  coffee: 6,
  juice: 6,
};

function translateOrder({
  drink,
  money,
  sugar = 0,
  stick = false,
  extraHot = false,
}) {
  const drinkCode = drinkCodes[drink];

  const drinkPrice = prices[drink];
  const differenceMoney = money - drinkPrice 

  if(isNegative(differenceMoney)){
    const missingMoneyMsg = `M:${absolute(differenceMoney)} euros missing`;
    return missingMoneyMsg;
  } 

  if(isStorageEmpty(drink)){
    notifyMissingDrink(drink);
    return `M:${drink} shortage, notified to the company`
  }

  const extraHotCode = extraHot ? "h" : "";
  const sugarCode = sugar || "";
  const stickCode = stick ? "0" : "";
  const output = `${drinkCode}${extraHotCode}:${sugarCode}:${stickCode}`;

  return output;
}

export default translateOrder;
