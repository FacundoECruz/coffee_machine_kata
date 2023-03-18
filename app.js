function translateOrder({
  drink,
  money,
  sugar = 0,
  stick = false,
  extraHot = false,
}) {
  function calculateMoney(drink, money) {
    let price;
    switch (drink) {
      case "tea":
        price = 4;
        break;
      case "chocolate":
        price = 5;
        break;
      case "coffee":
      case "juice":
        price = 6;
        break;
      default:
        return "No drink received";
    }
  
    if (money >= price) {
      return "";
    }
  
    return `${price - money} euros missing`;
  }  

  const checkDrink =
    drink === "tea"
      ? "T"
      : drink === "chocolate"
      ? "H"
      : drink === "coffee"
      ? "C"
      : drink === "juice"
      ? "O"
      : null;

  const checkSugar = sugar === 0 ? "" : sugar.toString();
  const checkStick = stick ? "0" : "";
  const checkMoney = calculateMoney(drink, money);

  const output = `${checkDrink}:${checkSugar}:${checkStick}`;
  console.log(checkMoney)

  return checkMoney !== "" ? checkMoney : output;
}


export default translateOrder;
