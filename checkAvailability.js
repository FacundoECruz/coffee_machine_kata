function beberageQuatityChecker(drink) {
  const fakeDrinkDb = {
    tea: 3,
    coffee: 0,
    juice: 3,
    chocolate: 2,
  }[drink];
  const isEmpty = fakeDrinkDb !== 0 ? false : true
  return isEmpty
}

function emailNotifier(drink) {
  const mail = {
    to: 'coffeeCompany@gmail.com',
    msg: `${drink} empty`
  }
  return mail
}

function checkAvailability(drink) {
  const isEmpty = beberageQuatityChecker(drink);
  if (isEmpty) {
    const mail = emailNotifier(drink);
    return mail;
  }
  return ''
}

export default checkAvailability;
