import { beverageQuantityChecker } from "./beverageQuantityChecker";
import emailNotifier from "./emailNotifier";

function checkAvailability(drink) {
  const isEmpty = beverageQuantityChecker(drink)
  console.log(isEmpty)
  return {
    isNotAvailable: isEmpty,
    availabilityMsg: `${drink} shortage, notification sent to the company`
  }
}

export default checkAvailability;
