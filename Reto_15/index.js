function decorateTree(base) {
  let combs = {
    PP: 'P',
    BB: 'B',
    RR: 'R',
    BP: 'R',
    PB: 'R',
    RP: 'B',
    PR: 'B',
    BR: 'P',
    RB: 'P',
  };

  let nextLevel = '';
  let current = '';
  let final = [];

  let remainLvl = base.split(' ').length - 1;

  final.push(base);
  while (remainLvl > 0) {
    let newString = '';
    for (let i = 0; i < base.length - 1; i += 2) {
      current = base[i] + base[i + 2];

      if (base[i + 2]) {
        nextLevel = combs[current];
        newString += nextLevel + ' ';
      }
    }
    base = [...newString];
    final.push(newString.trim());
    remainLvl--;
  }

  return final.reverse();
}
