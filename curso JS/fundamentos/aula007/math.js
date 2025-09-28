const raio = 5.6;
const area = Math.PI * Math.pow(raio,2);
console.log(area);
console.log(typeof Math);

//outros exemplos de utilização do Math

//Arredondamentos
console.log(Math.round(4.5));  // 5   (arredonda pro mais próximo)
console.log(Math.floor(4.9));  // 4   (sempre para baixo)
console.log(Math.ceil(4.1));   // 5   (sempre para cima)
console.log(Math.trunc(4.9));  // 4   (corta as casas decimais)

//Potências e raízes
console.log(Math.pow(2, 3));   // 8   (2³)
console.log(2 ** 3);           // 8   (mesma coisa, mas usando operador **)
console.log(Math.sqrt(25));    // 5   (raiz quadrada)
console.log(Math.cbrt(27));    // 3   (raiz cúbica)

//Valores absolutos, mínimo e máximo
console.log(Math.abs(-42));     // 42   (valor absoluto)
console.log(Math.max(1, 5, 3)); // 5    (maior valor)
console.log(Math.min(1, 5, 3)); // 1    (menor valor)

//Números aleatórios
console.log(Math.random());               // Ex: 0.374829... (entre 0 e 1)
console.log(Math.random() * 10);          // Ex: 7.28... (entre 0 e 10)
console.log(Math.floor(Math.random() * 6) + 1); // dado (1 a 6)
