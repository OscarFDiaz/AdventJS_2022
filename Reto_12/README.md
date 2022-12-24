# [Reto #12: Trineos eléctricos, ¡guau!](https://adventjs.dev/es/challenges/2022/12)

![Reto_12](../Assets/Retos_SVG/12.svg)

Papa Noél tiene nuevos trineos eléctricos pero debe controlar el consumo eléctrico ya que **sólo tiene una batería de 20W.**

Nos dan un **array de trineos, de peor a mejor**, con sus respectivos consumos. Cada trineo es un objeto con dos propiedades: `name` y `consumption`.

El campo `consumption` es un número que representa la cantidad de vatios (W) que **consume** el trineo para cada **unidad de distancia**. El campo `name` es una cadena de texto que representa el nombre del trineo.

Crea un programa que nos devuelva el nombre del mejor trineo disponible que nos permita cubrir la distancia.

```js
const distance = 30;
const sleighs = [
  { name: 'Dasher', consumption: 0.3 },
  { name: 'Dancer', consumption: 0.5 },
  { name: 'Rudolph', consumption: 0.7 },
  { name: 'Midu', consumption: 1 },
];

selectSleigh(distance, sleighs); // => "Dancer"

// Dasher consume 9W para recorrer 30 de distancia
// Dancer consume 15W para recorrer 30 de distancia
// Rudolph consume 21W para recorrer 30 de distancia
// Midu consume 30W para recorrer 30 de distancia

// El mejor trineo con el que puede recorrer
// la distancia es Dancer.

// Dasher recorre la distancia pero es peor trineo
// Rudolph y Midu no pueden recorrer la distancia con 20W.
```

## Recuerda que

- La batería siempre es de 20W.
- La lista de trineos está ordenada de peor a mejor trineo.
- Tienes que devolver el nombre del mejor trineo que nos permita cubrir la distancia con los vatios que tenemos disponibles.
- Si ningún trineo es usable para la distancia, devuelve `null`.

---

## Resultados

### Test #01

```js
Test: return type;

Expected: 'string';

Actual: 'string';
```

### Test #02

```js
Test: selectSleigh(1, [
  { name: 'pheralb', consumption: 0.3 },
  { name: 'TMChein', consumption: 0.5 },
]);

Expected: 'TMChein';

Actual: 'TMChein';
```

### Test #03

```js
Test: selectSleigh(10, [
  { name: 'Pedrosillano', consumption: 1 },
  { name: 'SamarJaffal', consumption: 5 },
]);

Expected: 'Pedrosillano';

Actual: 'Pedrosillano';
```

### Test #04

```js
Test: selectSleigh(10, [
  { name: 'Pedrosillano', consumption: 1 },
  { name: 'SamarJaffal', consumption: 2 },
  { name: 'marcospage', consumption: 3 },
]);

Expected: 'SamarJaffal';

Actual: 'SamarJaffal';
```

### Test #05

```js
Test: selectSleigh(50, [
  { name: 'Pedrosillano', consumption: 1 },
  { name: 'SamarJaffal', consumption: 2 },
  { name: 'marcospage', consumption: 3 },
]);

Expected: null;

Actual: null;
```
