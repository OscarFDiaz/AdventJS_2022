function dryNumber(dry, numbers) {
  let notNumbers = [];

  for (let i = 1; i <= numbers; i++) {
    if (i.toString().split('').includes(dry.toString())) {
      notNumbers.push(i);
    }
  }
  return notNumbers;
}
