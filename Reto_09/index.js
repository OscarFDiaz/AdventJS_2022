function countTime(leds) {
  let sec = 0;
  let temp = [...leds];

  while (leds.includes(0)) {
    for (let i = 0; i < leds.length; i++) {
      if (i == 0 && leds[0] == 0 && leds[leds.length - 1] == 1) {
        temp[0] = 1;
      } else if (leds[i] == 0 && leds[i - 1] == 1) {
        temp[i] = 1;
      }
    }
    sec += 7;
    leds = [...temp];
  }
  return sec;
}
