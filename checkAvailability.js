import { beverageQuantityChecker } from "./beverageQuantityChecker";
import emailNotifier from "./emailNotifier";

function checkAvailability(drink) {
  const isEmpty = beverageQuantityChecker(drink)
  console.log(isEmpty)
  if (isEmpty) {
    emailNotifier(drink);
    const notifEmptyDrink = `${drink} shortage, notification sent to the company`;
    return notifEmptyDrink;
  } else {
    return "";
  }
}

export default checkAvailability;
