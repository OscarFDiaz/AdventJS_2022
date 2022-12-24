# [Reto #19: Ordenando los regalos](https://adventjs.dev/es/challenges/2022/19)

![Reto_19](../Assets/Retos_SVG/19.svg)

El día se acerca y Papá Noel tiene el almacén de juguetes hecho un desastre. Ayúdale a ordenar los juguetes en el almacén para que pueda encontrarlos más fácilmente.

Para ello, nos dan dos arrays. El primero es un **array de juguetes**, y el segundo es un **array de números que indican la posición de cada juguete en el almacén.**

Lo único a tener en cuenta es que **las posiciones pueden no empezar en 0**, aunque siempre serán números consecutivos y de forma ascendente.

Tenemos que **devolver un array donde cada juguete esté en la posición que le corresponde.**

```js
const toys = ['ball', 'doll', 'car', 'puzzle'];
const positions = [2, 3, 1, 0];

sortToys(toys, positions);
// ['puzzle', 'car', 'ball', 'doll']

const moreToys = ['pc', 'xbox', 'ps4', 'switch', 'nintendo'];
const morePositions = [8, 6, 5, 7, 9];

sortToys(moreToys, morePositions);
// ['ps4', 'xbox', 'switch', 'pc', 'nintendo']
```

## A tener en cuenta

- Siempre habrá el mismo número de juguetes que de posiciones.
- Ni los juguetes ni las posiciones se repiten.

---

## Resultados

### Test #01

```js
Test: return type;

Expected: 'array';

Actual: 'array';
```

### Test #02

```js
Test: sortToys(['ball', 'doll', 'car', 'puzzle'], [2, 3, 1, 0]);

Expected: ['puzzle', 'car', 'ball', 'doll'];

Actual: ['puzzle', 'car', 'ball', 'doll'];
```

### Test #03

```js
Test: sortToys(['pc', 'xbox', 'ps4', 'switch', 'nintendo'], [3, 1, 0, 2, 4]);

Expected: ['ps4', 'xbox', 'switch', 'pc', 'nintendo'];

Actual: ['ps4', 'xbox', 'switch', 'pc', 'nintendo'];
```

### Test #04

```js
Test: sortToys(['pc', 'xbox', 'ps4', 'switch', 'nintendo'], [8, 6, 5, 7, 9]);

Expected: ['ps4', 'xbox', 'switch', 'pc', 'nintendo'];

Actual: ['ps4', 'xbox', 'switch', 'pc', 'nintendo'];
```

### Test #05

```js
Test: sortToys(
  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l'],
  [1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1111]
);

Expected: ['l', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k'];

Actual: ['l', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k'];
```
