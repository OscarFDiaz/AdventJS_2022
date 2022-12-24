function getCompleted(part, total) {
  const [hours, minutes, seconds] = part.split(':');
  let p = Number(hours) * 60 * 60 + Number(minutes) * 60 + Number(seconds);

  const [hours2, minutes2, seconds2] = total.split(':');
  let t = Number(hours2) * 60 * 60 + Number(minutes2) * 60 + Number(seconds2);

  let res = p / t;

  // Continued Fractions
  let eps = 1.0e-15;
  let h, h1, h2, k, k1, k2, a, x;

  x = res;
  a = Math.floor(x);
  h1 = 1;
  k1 = 0;
  h = a;
  k = 1;

  while (x - a > eps * k * k) {
    x = 1 / (x - a);
    a = Math.floor(x);
    h2 = h1;
    h1 = h;
    k2 = k1;
    k1 = k;
    h = h2 + a * h1;
    k = k2 + a * k1;
  }

  return h + '/' + k;
}
