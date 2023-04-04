import { beverageQuantityChecker } from "./beverageQuantityChecker";

function checkAvailability(drink) {
  const isEmpty = beverageQuantityChecker(drink)
  return {
    isNotAvailable: isEmpty,
    availabilityMsg: `${drink} shortage, notification sent to the company`
  }
}

export default checkAvailability;
