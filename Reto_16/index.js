// Las sentencias fueron hechas por ChatGPT

function fixLetter(letter) {
  // Reemplazar cualquier secuencia de múltiples
  // caracteres de espacio en blanco con un único espacio.
  letter = letter.replace(/(\s+)/g, ' ');

  // Reemplazar cualquier secuencia de un mismo
  // carácter de puntuación (?!.,) con una única
  // instancia de ese carácter.
  letter = letter.replace(/([?!.,])\1*/g, '$1');

  // Reemplazar cualquier instancia de un carácter de puntuación (?!.,)
  // rodeado por cero o más espacios con un único
  // espacio seguido por ese carácter.
  letter = letter.replace(/\s*([?!.,])\s*/g, '$1 ');

  // Reemplazar todas las ocurrencias de la cadena "santa claus"
  // (sin distinguir entre mayúsculas y minúsculas) con "Santa Claus".
  letter = letter.replace(/santa claus/gi, 'Santa Claus');

  // Reemplazar cualquier instancia de una letra minúscula seguida
  // por un espacio y un signo de exclamación o interrogación
  // por la versión en mayúsculas de esa letra.
  letter = letter.replace(/([?.!]\s[a-z])/g, (a) => a.toUpperCase());

  // Eliminar los espacios en blanco al principio y al final de la cadena.
  letter = letter.replace(/(^\s)|(\s$)/g, '');

  // Añadir un punto al final de la cadena si
  // el último carácter no es ya un punto.
  letter = letter.replace(/([A-z])$/g, '$1.');

  // Convertir la primera letra de la cadena a mayúsculas.
  letter = letter.replace(/^([a-z])/g, (a) => a.toUpperCase());

  return letter;
}
