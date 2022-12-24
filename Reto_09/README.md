# [Reto #9: Las locas luces de Navidad](https://adventjs.dev/es/challenges/2022/9)

![Reto_09](../Assets/Retos_SVG/9.svg)

Una empresa que fabrica luces de Navidad nos ha pedido que le echemos una mano.

Tienen unas tiras led que son como un `Array`. Cada posición es un led y puede ser estar encendido (`1`) o apagado (`0`).

_Cada 7 segundos_, los leds cambian de estado de esta forma:

- _Si el led está apagado_, se enciende si el led de su izquierda (`index - 1`) estaba encendido antes.
- _Si el led está encendido_, se mantiene siempre encendido.
  Nos han pedido un programa que nos diga cuantos segundos deben pasar hasta que todos los leds están encendidos. _Los segundos se expresan en un número entero_. Por ejemplo:

```js
const leds = [0, 1, 1, 0, 1];
countTime(leds); // 7
// 7 segundos ya que en el primer cambio
// todas las luces se encendieron
// 0s: [0, 1, 1, 0, 1]
// 7s: [1, 1, 1, 1, 1]

countTime([0, 0, 0, 1]); // 21
// 21 segundos ya que necesita tres cambios:
// 0s: [0, 0, 0, 1]
// 7s: [1, 0, 0, 1]
// 14s: [1, 1, 0, 1]
// 21s: [1, 1, 1, 1]

countTime([0, 0, 1, 0, 0]); // 28
// 28 segundos ya que necesita cuatro cambios:
// 0s: [0, 0, 1, 0, 0]
// 7s: [0, 0, 1, 1, 0]
// 14s: [0, 0, 1, 1, 1]
// 21s: [1, 0, 1, 1, 1]
// 28s: [1, 1, 1, 1, 1]
```

## A tener en cuenta

- El array siempre tendrá al menos un led encendido.
- El array puede tener cualquier longitud.
- Si todos los leds están encendidos, el tiempo es 0.

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
Test: countTime([0, 1, 1, 0, 1]);

Expected: 7;

Actual: 7;
```

### Test #03

```js
Test: countTime([0, 0, 0, 1]);

Expected: 21;

Actual: 21;
```

### Test #04

```js
Test: countTime([0, 0, 1, 0, 0]);

Expected: 28;

Actual: 28;
```

### Test #05

```js
Test: countTime([1, 0, 0, 1, 0, 0]);

Expected: 14;

Actual: 14;
```

### Test #06

```js
Test: countTime([1, 1, 0, 0, 0, 0]);

Expected: 28;

Actual: 28;
```

### Test #07

```js
Test: countTime([1, 1, 1]);

Expected: 0;

Actual: 0;
```
