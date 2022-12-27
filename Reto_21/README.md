# [Reto #21: Creando la tabla de regalos](https://adventjs.dev/es/challenges/2022/21)

![Reto_21](../Assets/Retos_SVG/21.svg)

Hay muchas cartas de niños pidiendo regalos y es muy difícil que podamos hacer inventario de todos ellos. Por eso, hemos decidido crear un programa que nos dibuje una tabla con los regalos que nos piden y sus cantidades.

Para ello nos dan un array de objetos con los nombres de los regalos y sus cantidades. Escribe una función que reciba este array y devuelva una cadena con la tabla dibujada.

```js
printTable([
  { name: 'Game', quantity: 2 },
  { name: 'Bike', quantity: 1 },
  { name: 'Book', quantity: 3 },
]);
```

```js
+++++++++++++++++++
| Gift | Quantity |
| ---- | -------- |
| Game | 2        |
| Bike | 1        |
| Book | 3        |
*******************
```

Otro ejemplo donde se puede ver que la tabla siempre usa sólo el espacio justo dependiendo de la longitud de los nombres de los regalos y de las cantidades.

```js
printTable([
  { name: 'PlayStation 5', quantity: 9234782374892 },
  { name: 'Book Learn Web Dev', quantity: 23531 },
]);
```

```js
++++++++++++++++++++++++++++++++++++++
| Gift               | Quantity      |
| ------------------ | ------------- |
| PlayStation 5      | 9234782374892 |
| Book Learn Web Dev | 23531         |
**************************************
```

Como ves, el tamaño de las celdas depende de la longitud de los nombres de los regalos y de las cantidades, aunque como mínimo tendrán que ser del espacio de los títulos `Gift` y `Quantity` respectivamente.

La tabla usa los símbolos: `+` para el borde superior, `*` para el borde inferior, `-` para las líneas horizontales y `|` para las líneas verticales.

## Ten en cuenta:

- Usa sólo el espacio que necesitas para dibujar la tabla.
- Adapta la tabla a la longitud de los nombres de los regalos y de las cantidades o los títulos de las columnas.
- No hace falta que ordenes los resultados.
- La tabla no termina con salto de línea.

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
Test: printTable([
  { name: 'PlayStation 5', quantity: 9234782374892 },
  { name: 'Book Learn Web Dev', quantity: 23531 },
]);

Expected: '++++++++++++++++++++++++++++++++++++++\n
           | Gift               | Quantity      |\n
           | ------------------ | ------------- |\n
           | PlayStation 5      | 9234782374892 |\n
           | Book Learn Web Dev | 23531         |\n
           **************************************';

Actual: '++++++++++++++++++++++++++++++++++++++\n
         | Gift               | Quantity      |\n
         | ------------------ | ------------- |\n
         | PlayStation 5      | 9234782374892 |\n
         | Book Learn Web Dev | 23531         |\n
         **************************************';
```

### Test #03

```js
Test: printTable([
  { name: 'Game', quantity: 2 },
  { name: 'Bike', quantity: 1 },
  { name: 'Book', quantity: 3 },
]);

Expected: '+++++++++++++++++++\n
           | Gift | Quantity |\n
           | ---- | -------- |\n
           | Game | 2        |\n
           | Bike | 1        |\n
           | Book | 3        |\n
           *******************';

Actual: '+++++++++++++++++++\n
         | Gift | Quantity |\n
         | ---- | -------- |\n
         | Game | 2        |\n
         | Bike | 1        |\n
         | Book | 3        |\n
         *******************';
```

### Test #04

```js
Test: printTable([{ name: 'Game', quantity: 10000 }]);

Expected: '+++++++++++++++++++\n
           | Gift | Quantity |\n
           | ---- | -------- |\n
           | Game | 10000    |\n
           *******************';

Actual:   '+++++++++++++++++++\n
           | Gift | Quantity |\n
           | ---- | -------- |\n
           | Game | 10000    |\n
           *******************';
```

### Test #05

```js
Test: printTable([{ name: 'Game', quantity: 1234567890 }]);

Expected: '+++++++++++++++++++++\n
           | Gift | Quantity   |\n
           | ---- | ---------- |\n
           | Game | 1234567890 |\n
           *********************';

Actual:   '+++++++++++++++++++++\n
           | Gift | Quantity   |\n
           | ---- | ---------- |\n
           | Game | 1234567890 |\n
           *********************';
```

### Test #06

```js
Test: printTable([
  { name: 'Toy', quantity: 12 },
  { name: 'Mic', quantity: 123 },
]);

Expected: '+++++++++++++++++++\n
           | Gift | Quantity |\n
           | ---- | -------- |\n
           | Toy  | 12       |\n
           | Mic  | 123      |\n
           *******************';

Actual:   '+++++++++++++++++++\n
           | Gift | Quantity |\n
           | ---- | -------- |\n
           | Toy  | 12       |\n
           | Mic  | 123      |\n
           *******************';
```
