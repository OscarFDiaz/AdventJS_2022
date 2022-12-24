# [Reto #18: ¡Nos quedamos sin tinta!](https://adventjs.dev/es/challenges/2022/18)

![Reto_18](../Assets/Retos_SVG/18.svg)

Estamos imprimiendo los códigos de barra para los envíso. En la fábrica de Papá Noel usando un sistema de estampación de números donde cada número se imprime con una tinta diferente. Es un sistema antiguo pero fiable. Sin embargo, a veces nos quedamos sin tinta de un número.

**Escribe una función** que **recibe el número del que no tenemos tinta** (un número que será del 0 al 9) y como segundo parámetro, **el número de códigos de barras que hay que imprimir** (empezamos desde 1 hasta este número que recibimos).

Nos debe **devolver un array con los números que incluyen el número que no tenemos tinta.** Veamos un ejemplo:

```js
dryNumber(1, 15); // [1, 10, 11, 12, 13, 14, 15]

// no tenemos tinta para el 1
// tenemos que imprimir 15 códigos de barras del 1 al 15
// los códigos de barras que saldrán mal por falta de tinta son:
// 1, 10, 11, 12, 13, 14, 15

dryNumber(2, 20); // [2, 12, 20]

// no tenemos tinta para el 2
// tenemos que imprimir 20 códigos de barras del 1 al 20
// los códigos de barras que saldrán mal por falta de tinta son:
// 2, 12, 20
```

## Ten en cuenta que:

- El número del que no tenemos tinta sólo puede ser del 0 al 9.
- El número del que no tenemos tinta puede estar en cualquier posición del código de barras.
- El número de códigos de barras que hay que imprimir puede ser muy grande.

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
Test: dryNumber(1, 15);

Expected: [1, 10, 11, 12, 13, 14, 15];

Actual: [1, 10, 11, 12, 13, 14, 15];
```

### Test #03

```js
Test: dryNumber(2, 20);

Expected: [2, 12, 20];

Actual: [2, 12, 20];
```

### Test #04

```js
Test: dryNumber(3, 33);

Expected: [3, 13, 23, 30, 31, 32, 33];

Actual: [3, 13, 23, 30, 31, 32, 33];
```

### Test #05

```js
Test: dryNumber(4, 45);

Expected: [4, 14, 24, 34, 40, 41, 42, 43, 44, 45];

Actual: [4, 14, 24, 34, 40, 41, 42, 43, 44, 45];
```

### Test #06

```js
Test: dryNumber(5, 55);

Expected: [5, 15, 25, 35, 45, 50, 51, 52, 53, 54, 55];

Actual: [5, 15, 25, 35, 45, 50, 51, 52, 53, 54, 55];
```

### Test #07

```js
Test: dryNumber(9, 8);

Expected: [];

Actual: [];
```
