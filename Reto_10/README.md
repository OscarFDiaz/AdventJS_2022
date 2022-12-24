# [Reto #10: El salto del trineo de Papá Noel](https://adventjs.dev/es/challenges/2022/10)

![Reto_10](../Assets/Retos_SVG/10.svg)

Crea un programa que compruebe que el trineo de Santa Claus hace una **parabola al saltar entre ciudades**. Recibes un **array de números** que representan la **altura** en la que se encuentra el trineo en cada momento.

Para que la parabola sea correcta, el viaje del trineo debe ser ascendente al principio, llegar al punto más alto y descender hasta el final. **No puede volver a subir una vez que ha bajado**, ni puede iniciar el viaje bajando. Veamos unos ejemplos:

```js
const heights = [1, 3, 8, 5, 2]
checkJump(heights) // true

/*
Es `true`.
El salto va de abajo a arriba y luego de arriba a abajo:

    8 (punto más alto)
   ↗ ↘
  3   5
 ↗     ↘
1       2
*/

const heights = [1, 7, 3, 5]
checkJump(heights) // false

/*
Es `false`.
Va de abajo a arriba, de arriba a abajo y luego sube otra vez.

  7   5
 ↗ ↘ ↗
1   3
```

Necesitamos que el programa devuelva un `boolean` que indique si el trineo hace una parabola o no.

## A tener en cuenta

- Para que el salto sea válido tiene que subir una vez y bajar una vez. Si durante el salto se queda en la misma altura entre dos posiciones, la parabola continua.
- No hace falta que el punto de inicio y final sean el mismo (las ciudades pueden estar a diferentes alturas).

---

## Resultados

### Test #01

```js
Test: return type;

Expected: 'boolean';

Actual: 'boolean';
```

### Test #02

```js
Test: checkJump([1, 2, 1]);

Expected: true;

Actual: true;
```

### Test #03

```js
Test: checkJump([1, 3, 8, 5, 2]);

Expected: true;

Actual: true;
```

### Test #04

```js
Test: checkJump([1, 7, 3, 5]);

Expected: false;

Actual: false;
```

### Test #05

```js
Test: checkJump([1, 2, 3, 2, 1]);

Expected: true;

Actual: true;
```

### Test #06

```js
Test: checkJump([1, 2, 2, 2, 1]);

Expected: true;

Actual: true;
```

### Test #07

```js
Test: checkJump([0, 1, 0]);

Expected: true;

Actual: true;
```

### Test #08

```js
Test: checkJump([2, 2, 2, 2]);

Expected: false;

Actual: false;
```

### Test #09

```js
Test: checkJump([1, 2, 3]);

Expected: false;

Actual: false;
```

### Test #10

```js
Test: checkJump(checkJump([1, 2, 3, 2, 1, 2, 3]));

Expected: false;

Actual: false;
```

### Test #11

```js
Test: checkJump([1, 1000, 900, 800]);

Expected: true;

Actual: true;
```

### Test #12

```js
Test: checkJump([1, 1000, 100, 800]);

Expected: false;

Actual: false;
```

### Test #13

```js
Test: checkJump([1, 1, 1, 1, 1, 1, 1, 1, 2, 1]);

Expected: true;

Actual: true;
```

### Test #14

```js
Test: checkJump([1, 2, 3, 1, 3, 1]);

Expected: false;

Actual: false;
```

### Test #15

```js
Test: checkJump([1, 3, 2, 5, 4, 3, 2, 1]);

Expected: false;

Actual: false;
```
