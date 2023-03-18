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
    : `${checkDrink}${extraHot ? "h" : ""}:${sugar || ""}:${stick ? "0" : ""}`;

  return output || "No drink received";
}

function makeReport() {
  const report = {
    coffee: 0,
    juice: 0,
    chocolate: 0,
    tea: 0,
    earnedMoney: 0,
  }

  return report; 
}

export { makeReport };
export default translateOrder;
