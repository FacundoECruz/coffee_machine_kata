function translateOrder({ drink, sugar, stick, money }) {
  function calculateMoney(drink, money) {
    switch (drink) {
      case "tea": {
        if (money >= 4) {
          return true;
        }
        return `${4 - money} euros missing`;
      }
      case "chocolate": {
        if (money >= 5) {
          return true;
        }
        return `${5 - money} euros missing`;
      }
      case "coffee":
      case "juice": {
        if (money >= 6) {
          return true;
        }
        return `${6 - money} euros missing`;
      }
      default:
        "No drink received";
    }
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

  function generateOutput(checkDrink, drink, money, sugar, stick) {
    console.log(checkDrink, drink, money, sugar, stick)
    if (drink === "juice") {
      const checkMoney = calculateMoney(drink, money);
      if(typeof checkMoney === "string"){
        return checkMoney
      } else {
        return `${checkDrink}::`
      }
    } else {
      const checkSugar = sugar === 0 ? "" : sugar.toString();
      const checkStick = stick ? "0" : "";
      const checkMoney = calculateMoney(drink, money);
      if(typeof checkMoney === "string"){
        return checkMoney
      } else {
        return `${checkDrink}:${checkSugar}:${checkStick}`
      }
    }
  }

  const output = generateOutput(checkDrink)
  console.log(output);
  return generateOutput
}

export default translateOrder;
