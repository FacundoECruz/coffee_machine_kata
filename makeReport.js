function makeReport() {
  const report = {
    coffee: 0,
    juice: 0,
    chocolate: 0,
    tea: 0,
    earnedMoney: 0,
  };

  const {coffee, juice, chocolate, tea, earnedMoney} = report

  return `M: Coffee: ${coffee}, Juice: ${juice}, Chocolate: ${chocolate}, Tea: ${tea}, Earned Money: ${earnedMoney}`;
}

export default makeReport;
