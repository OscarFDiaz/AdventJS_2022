function wrapping(gifts) {
  let newArr = [];
  let repeat = 0;

  for (let i = 0; i < gifts.length; i++) {
    repeat = gifts[i].length + 2;
    newArr.push('*'.repeat(repeat) + '\n*' + gifts[i] + '*\n' + '*'.repeat(repeat));
  }

  return newArr;
}
