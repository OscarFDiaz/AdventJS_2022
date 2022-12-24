function getGiftsToRefill(a1, a2, a3) {
  //let gifs = Array.from(new Set(a1.concat(a2, a3)));
  let gifs = [...new Set([...a1, ...a2, ...a3])];
  let stock = [];

  let counter = 0;
  for (let gif of gifs) {
    if (a1.includes(gif)) {
      counter++;
    }
    if (a2.includes(gif)) {
      counter++;
    }
    if (a3.includes(gif)) {
      counter++;
    }

    if (counter < 2) {
      stock.push(gif);
    }

    counter = 0;
  }

  return stock;
}
