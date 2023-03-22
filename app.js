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
  const available = checkAvailability(drink)

  if(available !== '') { 
    return available
  }

  const price = {
    tea: 4,
    chocolate: 5,
    coffee: 6,
    juice: 6,
  }[drink];

  const missingMoney = price ? Math.max(price - money, 0) : null;

  const output =
    missingMoney !== 0
      ? `${missingMoney} euros missing`
      : `${checkDrink}${extraHot ? "h" : ""}:${sugar || ""}:${
          stick ? "0" : ""
        }`;

  return output || "No drink received";
}

export default translateOrder;
