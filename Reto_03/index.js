function distributeGifts(packOfGifts, reindeers) {
  let pGifts = 0;
  let reind = 0;

  for (let i = 0; i < packOfGifts.length; i++) {
    pGifts += packOfGifts[i].length;
  }

  for (let i = 0; i < reindeers.length; i++) {
    reind += reindeers[i].length * 2;
  }

  return Math.floor(reind / pGifts);
}
