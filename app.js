import checkAvailability from "./checkAvailability";

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
  //*******CHANGE*********** */
  const {is_not_available, availability_msg} = checkAvailability(drink)

  if(is_not_available) { 
    return available
  }

  const prices = {
    tea: 4,
    chocolate: 5,
    coffee: 6,
    juice: 6,
  };

  const missingMoney = prices[drink] ? positiveOrZero(price - money) : null;

  const output =
    missingMoney !== 0
      ? `M:${missingMoney} euros missing`
      : `${checkDrink}${extraHot ? "h" : ""}:${sugar || ""}:${
          stick ? "0" : ""
        }`;

  return output || "No drink received";

  function positiveOrZero(value) {
    return Math.max(value, 0);
  }
}

export default translateOrder;
