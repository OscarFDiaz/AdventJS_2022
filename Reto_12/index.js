function selectSleigh(distance, sleighs) {
  let nameSelected = null;

  for (let i = 0; i < sleighs.length; i++) {
    if (sleighs[i].consumption * distance <= 20) {
      nameSelected = sleighs[i].name;
    }
  }

  return nameSelected;
}
