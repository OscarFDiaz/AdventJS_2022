function carryGifts(gifts, maxWeight) {
  let bag = '';
  let currentNumber = maxWeight;
  let bagArray = [];

  for (let i = 0; i < gifts.length; i++) {
    // Si la palabra es mayor a la capacidad skipeo el proceso
    if (gifts[i].length > maxWeight) continue;

    // Si el regalo es mayor a la capacidad restanto
    // Inserto lo que tenga en el temporal bag y vacio el temporal
    // Reinicio el contador de peso dado que ya no cabe más
    if (gifts[i].length > currentNumber) {
      bagArray.push(bag.trim());
      currentNumber = maxWeight;
      bag = '';
    }
    // Añado al temporal el regalo actual y un espacio
    // Resto a mi espacio restante la longitud del regalo
    bag += gifts[i] + ' ';
    currentNumber -= gifts[i].length;
  }

  // Si la bolsa no esta vacia añado al arreglo lo que tiene
  // Reseteo el contador de peso dado que ya no cabe más
  if (bag != '') {
    bagArray.push(bag.trim());
  }

  return bagArray;
}
