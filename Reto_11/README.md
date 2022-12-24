# [Reto #11: Papá Noel es Scrum Master](https://adventjs.dev/es/challenges/2022/11)

![Reto_11](../Assets/Retos_SVG/11.svg)

Papa Noél está un poco preocupado porque los preparativos están llevando mucho tiempo. Hace poco se ha sacado una certificación de Scrum y ha decidido usar la metodología para organizar el trabajo de sus elfos.

Le dicen la duración esperada de las tareas con un string con el formato `hh:mm:ss` y en el mismo formato cuánto tiempo llevan trabajando en ella.

Pero Papa Noél no se entera rápidamente si falta o mucho para que termine, así que nos ha pedido que hagamos un programa que nos indique la porción de la tarea que ya se ha completado.

Por ejemplo, si la tarea dura `03:00:00` y llevan trabajando `01:00:00` entonces ya han completado `1/3` de la tarea. En código:

```js
getCompleted('01:00:00', '03:00:00'); // '1/3'
getCompleted('02:00:00', '04:00:00'); // '1/2'
getCompleted('01:00:00', '01:00:00'); // '1/1'
getCompleted('00:10:00', '01:00:00'); // '1/6'
getCompleted('01:10:10', '03:30:30'); // '1/3'
getCompleted('03:30:30', '05:50:50'); // '3/5
```

## A tener en cuenta

- El formato de la hora es `hh:mm:ss`.
- El formato de la salida es un string `a/b` donde `a` es la porción de la tarea que ya se ha completado y `b` es la porción de la tarea que falta por completar.
- La porción siempre se muestra con la menor fracción posible. (por ejemplo, nunca se mostraría `2/4` porque se puede representar como `1/2`).
- Si ya se ha completado la tarea, la fracción sería `1/1`.
- Ningun elfo ha sido maltradado durante la ejecución de este reto ni han tenido que usar Scrum de verdad.

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
Test: getCompleted('01:00:00', '03:00:00');

Expected: '1/3';

Actual: '1/3';
```

### Test #03

```js
Test: getCompleted('02:00:00', '04:00:00');

Expected: '1/2';

Actual: '1/2';
```

### Test #04

```js
Test: getCompleted('01:00:00', '01:00:00');

Expected: '1/1';

Actual: '1/1';
```

### Test #05

```js
Test: getCompleted('00:10:00', '01:00:00');

Expected: '1/6';

Actual: '1/6';
```

### Test #06

```js
Test: getCompleted('01:10:10', '03:30:30');

Expected: '1/3';

Actual: '1/3';
```

### Test #07

```js
Test: getCompleted('02:20:20', '03:30:30');

Expected: '2/3';

Actual: '2/3';
```

### Test #08

```js
Test: getCompleted('03:30:30', '05:50:50');

Expected: '3/5';

Actual: '3/5';
```
