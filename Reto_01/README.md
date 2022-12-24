# [Reto #1: ¡Automatizando envolver regalos de navidad!](https://adventjs.dev/es/challenges/2022/1)

![Reto_01](../Assets/Retos_SVG/1.svg)

Este año los elfos han comprado una máquina que envuelve regalos. Pero… ¡no viene programada! Necesitamos crear un algoritmo que le ayude en la tarea.

A la máquina se le pasa un array con los regalos. Cada regalo es un string. Necesitamos que la máquina envuelva cada regalo en papel de regalo y lo coloque en un array de regalos envueltos.

El papel de regalo es el símbolo `*` y para envolver un regalo se coloca el símbolo `*` de forma que rodee totalmente al string por todos los lados. Por ejemplo:

```js
const gifts = ['cat', 'game', 'socks'];
const wrapped = wrapping(gifts);

console.log(wrapped);
/* [
  "*****\\n*cat*\\n*****",
  "******\\n*game*\\n******",
  "*******\\n*socks*\\n*******"
] */
```

Como ves, el papel de regalo envuelve el string. Por arriba y por abajo, para no dejar ningún hueco, las esquinas también están cubiertas por el papel de regalo.

<strong style="color:rgb(250 202 2)">Nota:</strong> El carácter `\n` representa un salto de línea.

<strong style="color:rgb(250 202 2)">¡Ojo!</strong> Asegúrate que pones el número correcto de \* para envolver completamente el string. Pero no demasiados. Sólo los necesarios para cubrir el string.

Ah, <strong style="color:rgb(250 202 2)">y no modifiques (mutes) el array original.</strong>

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
Test: wrapping(gifts);

Expected: ['*****\n*cat*\n*****', '******\n*game*\n******', '*******\n*socks*\n*******'];

Actual: ['*****\n*cat*\n*****', '******\n*game*\n******', '*******\n*socks*\n*******'];
```

### Test #03

```js
Test: wrapping(['midu']);

Expected: ['******\n*midu*\n******'];

Actual: ['******\n*midu*\n******'];
```

### Test #04

```js
Test: wrapping(['a']);

Expected: ['***\n*a*\n***'];

Actual: ['***\n*a*\n***'];
```

### Test #05

```js
Test: wrapping an empty array should return an empty array

Expected:
[]

Actual:
[]
```
