function emailNotifier(drink) {
  const mail = {
    to: 'coffeeCompany@gmail.com',
    msg: `${drink} empty`
  }
  return mail
}

export default emailNotifier