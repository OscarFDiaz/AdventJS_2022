# [Reto #8: ¡Necesitamos un mecánico!](https://adventjs.dev/es/challenges/2022/8)

![Reto_08](../Assets/Retos_SVG/8.svg)

Se han estropeado algunos trineos eléctricos y los elfos están buscando piezas de repuesto para arreglarlos, pero no tienen claro si las piezas que tienen sirven.

Las piezas de repuesto son cadenas de texto y el mecánico Elfon Masc ha dicho que una pieza de repuesto es válida **si la pieza puede ser un palíndromo después de eliminar, como máximo, un carácter.**

_Un palíndromo es una palabra o frase que se lee igual de izquierda a derecha que de derecha a izquierda._

Nuestra función debe devolver un booleano que indique si la pieza de repuesto es válida o no con esa regla:

```js
checkPart('uwu'); // true
// "uwu" es un palíndromo sin eliminar ningún carácter

checkPart('miidim'); // true
// "miidim" puede ser un palíndromo después de eliminar la primera "i"
// ya que "midim" es un palíndromo

checkPart('midu'); // false
// "midu" no puede ser un palíndromo después de eliminar un carácter
```

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
Test: checkPart('uwu');

Expected: true;

Actual: true;
```

### Test #03

```js
Test: checkPart('midu');

Expected: false;

Actual: false;
```

### Test #04

```js
Test: checkPart('lolol');

Expected: true;

Actual: true;
```

### Test #05

```js
Test: checkPart('yolooloy');

Expected: true;

Actual: true;
```

### Test #06

```js
Test: checkPart('zzzoonzzz');

Expected: true;

Actual: true;
```
