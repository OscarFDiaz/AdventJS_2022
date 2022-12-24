function getMaxGifts(giftsCities, maxGifts, maxCities) {
  // caso base: si hemos excedido el número máximo de ciudades o regalos, devolver 0
  if (maxCities <= 0 || maxGifts <= 0) {
    return 0;
  }

  // mantener un registro del número máximo de regalos que se pueden entregar
  let maxTotal = 0;

  // intentar entregar regalos en cada ciudad
  for (let i = 0; i < giftsCities.length; i++) {
    // si se pueden entregar los regalos en la ciudad actual
    if (giftsCities[i] <= maxGifts) {
      // entregar los regalos y pasar a la siguiente ciudad
      let total = getMaxGifts(giftsCities.slice(i + 1), maxGifts - giftsCities[i], maxCities - 1);
      // añadir el número de regalos entregados en la ciudad actual al total
      total += giftsCities[i];

      // actualizar el número máximo de regalos que se pueden entregar
      maxTotal = Math.max(maxTotal, total);
    }
  }

  return maxTotal;
}
