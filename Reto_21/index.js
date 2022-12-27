function printTable(gifts) {
  let longestGift = 4;
  let longestQuantity = 8;
  let inventory = '';

  // Consigo el regalo y la cantidad más larga
  for (const gift of gifts) {
    const { name, quantity } = gift;
    if (name.length > longestGift) longestGift = name.length;
    if (quantity.toString().length > longestQuantity) longestGift = longestQuantity = quantity.toString().length;
  }

  // El 7 representa los espacios extras
  let boxLength = longestGift + longestQuantity + 7;

  let giftSpaces = longestGift - 4;
  if (longestGift == 4) giftSpaces = 0;

  let quaSpaces = longestQuantity - 8;
  if (longestQuantity == 8) quaSpaces = 0;

  inventory += '+'.repeat(boxLength) + '\n';
  inventory += '| Gift' + ' '.repeat(giftSpaces) + ' | Quantity' + ' '.repeat(quaSpaces) + ' |\n';
  inventory += '| ' + '-'.repeat(longestGift) + ' | ' + '-'.repeat(longestQuantity) + ' |\n';

  for (const gift of gifts) {
    inventory +=
      '| ' +
      gift.name +
      ' '.repeat(longestGift - gift.name.length) +
      ' | ' +
      gift.quantity.toString() +
      ' '.repeat(longestQuantity - gift.quantity.toString().length) +
      ' |\n';
  }
  inventory += '*'.repeat(boxLength);

  return inventory;
}
// Expected:
//  "+++++++++++++++++++
// \n| Gift | Quantity |
// \n| ---- | -------- |
// \n| Game | 2        |
// \n| Bike | 1        |
// \n| Book | 3        |
// \n*******************"

// Actual:
//  "+++++++++++++++++++
// \n| Gift | Quantity |
// \n| ---- | - |
// \n| Game | 2 |
// \n| Bike | 1 |
// \n| Book | 3 |
// \n*******************"

//  "+++++++++++++++++++
// \n| Gift | Quantity |
// \n| ---- | -------- |
// \n| Game | 2 |
// \n| Bike | 1 |
// \n| Book | 3 |
// \n*******************"

console.log(
  printTable([
    { name: 'Game', quantity: 2 },
    { name: 'Bike', quantity: 1 },
    { name: 'Book', quantity: 3 },
  ])
);
