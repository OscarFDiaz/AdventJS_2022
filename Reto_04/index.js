function fitsInOneBox(boxes) {
  let object = 0;
  let l = 0,
    w = 0,
    h = 0,
    l2 = 0,
    w2 = 0,
    h2 = 0;

  if (boxes.length == 0 || boxes.length == null) return true;

  while (boxes.length > 0) {
    let minus = 1000;
    for (let i = 0; i < boxes.length; i++) {
      let current = boxes[i].l + boxes[i].w + boxes[i].h;
      if (current < minus) {
        minus = current;
        object = i;
        l2 = boxes[i].l;
        w2 = boxes[i].w;
        h2 = boxes[i].h;
      }
    }

    if (boxes[object].l > l && boxes[object].w > w && boxes[object].h > h) {
      l = boxes[object].l;
      w = boxes[object].w;
      h = boxes[object].h;
      boxes.splice(object, 1);
    } else {
      return false;
    }
  }

  return true;
}
