function countHours(year, holidays) {
  let aTrabajar = 0;
  for (let i = 0; i < holidays.length; i++) {
    let splitedDate = holidays[i].split('/');
    let date = new Date(year, Number(splitedDate[0] - 1), Number(splitedDate[1]));
    let day = date.getDay();

    if (day != 0 && day != 6) {
      aTrabajar += 2;
    }
  }
  return aTrabajar;
}
