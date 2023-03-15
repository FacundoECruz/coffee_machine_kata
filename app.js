function translateOrder({ drink, sugar, stick }) {
  const checkDrink = drink === "tea" ? "T" : "H";
  const checkSugar = sugar === 0 ? "" : sugar.toString();
  const checkStick = stick ? "0" : "";

  const output = `${checkDrink}:${checkSugar}:${checkStick}`;

  return output;
}

export default translateOrder;
