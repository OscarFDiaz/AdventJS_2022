function printTable(gifts) {
  let longestGift = 4;
  let longestQuantity = 8;
  let inventory = '';

  // Consigo el regalo y la cantidad más larga
  for (const gift of gifts) {
    const { name, quantity } = gift;
    name.length > longestGift ? (longestGift = name.length) : null;

    quantity.toString().length > longestQuantity ? (longestQuantity = quantity.toString().length) : null;
  }

  // El 7 representa los espacios extras
  let boxLength = longestGift + longestQuantity + 7;

  let giftSpaces = longestGift - 4;
  if (longestGift == 4) giftSpaces = 0;

  let quaSpaces = longestQuantity - 8;
  if (longestQuantity == 8) quaSpaces = 0;

  inventory +=
    `${'+'.repeat(boxLength)}\n| Gift${' '.repeat(giftSpaces)}` +
    ` | Quantity${' '.repeat(quaSpaces)} |\n` +
    `| ${'-'.repeat(longestGift)}` +
    ` | ${'-'.repeat(longestQuantity)} |\n`;

  for (const gift of gifts) {
    const { name, quantity } = gift;
    inventory +=
      `| ${name}${' '.repeat(longestGift - name.length)} | ${quantity}` +
      `${' '.repeat(longestQuantity - quantity.toString().length)} |\n`;
  }
  inventory += '*'.repeat(boxLength);

  return inventory;
}
