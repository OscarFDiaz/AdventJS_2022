# [Reto #5: Optimizando viajes de Santa](https://adventjs.dev/es/challenges/2022/5)

![Reto_05](../Assets/Retos_SVG/5.svg)

Para no cansar a los renos, Papá Noel quiere dejar el máximo número de regalos haciendo el menor número posible de viajes.

Tiene un array de ciudades donde cada elemento es el número de regalos que puede dejar allí. `[12, 3, 11, 5, 7]`. Por otro lado, el límite de regalos que caben en su saco. Y, finalmente, el número de ciudades máximo que sus renos pueden visitar.

Como no quiere dejar una ciudad a medias, <strong>si no puede dejar todos los regalos que son de esa ciudad, no deja ninguno allí.</strong>

Crea un programa que le diga <strong>la suma más alta de regalos</strong> que podría repartir teniendo en cuenta el máximo de regalos que puede transportar y el número máximo de ciudades que puede visitar:

```js
const giftsCities = [12, 3, 11, 5, 7];
const maxGifts = 20;
const maxCities = 3;

// la suma más alta de regalos a repartir
// visitando un máximo de 3 ciudades
// es de 20: [12, 3, 5]

// la suma más alta sería [12, 7, 11]
// pero excede el límite de 20 regalos y tendría
// que dejar alguna ciudad a medias.

getMaxGifts(giftsCities, maxGifts, maxCities); // 20
```

Si no se puede realizar ningún viaje que satisface los requerimientos, el resultado debe ser `0`. Más ejemplos:

```js
getMaxGifts([12, 3, 11, 5, 7], 20, 3); // 20
getMaxGifts([50], 15, 1); // 0
getMaxGifts([50], 100, 1); // 50
getMaxGifts([50, 70], 100, 1); // 70
getMaxGifts([50, 70, 30], 100, 2); // 100
getMaxGifts([50, 70, 30], 100, 3); // 100
getMaxGifts([50, 70, 30], 100, 4); // 100
```

A tener en cuenta:

- maxGifts >= 1
- giftsCities.length >= 1
- maxCities >= 1
- El número de maxCities puede ser mayor a giftsCities.length

---

## Resultados

### Test #01

```js
Test: return type;

Expected: 'number';

Actual: 'number';
```

### Test #02

```js
Test: getMaxGifts([12, 3, 11, 5, 7], 20, 3);

Expected: 20;

Actual: 20;
```

### Test #03

```js
Test: getMaxGifts([50], 15, 1);

Expected: 0;

Actual: 0;
```

### Test #04

```js
Test: getMaxGifts([50], 100, 1);

Expected: 50;

Actual: 50;
```

### Test #05

```js
Test: getMaxGifts([50, 70], 100, 1);

Expected: 70;

Actual: 70;
```

### Test #06

```js
Test: getMaxGifts([50, 70, 30], 100, 2);

Expected: 100;

Actual: 100;
```

### Test #07

```js
Test: getMaxGifts([50, 70, 30], 100, 3);

Expected: 100;

Actual: 100;
```

### Test #08

```js
Test: getMaxGifts([50, 10, 40, 1000, 500, 200], 199, 4);

Expected: 100;

Actual: 100;
```

### Test #09

```js
Test: getMaxGifts([50, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1000, 1000);

Expected: 115;

Actual: 115;
```
