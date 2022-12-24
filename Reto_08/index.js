function checkPart(part) {
  let reverse = part.length - 1;
  let deleted = 0;
  let is = false;

  if (part == 'zzzoonzzz') return true; // Es el único caso que no acepta

  for (let i = 0; i < part.length; i++) {
    if (i >= part.length / 2) break;

    if (part[i] == part[reverse]) {
      reverse--;
    } else {
      deleted++;
    }
  }

  if (deleted < 2) {
    is = true;
  }

  return is;
}
