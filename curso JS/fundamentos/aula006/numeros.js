
//number: Representa números, incluindo números inteiros e de ponto flutuante.
const peso1 = 1.0;
const peso2 = Number("2.0"); //converte a string '2.0' em número usando o construtor Number.
console.log(peso1, peso2);

//Verificação se são inteiros
console.log(Number.isInteger(peso1));//true, pois 1.0 é considerado inteiro.
console.log(Number.isInteger(peso2));//true, pois 2.0 também é inteiro (o .0 não muda isso).

//Notas e cálculo de média ponderada
const avaliacao1 = 9.871;
const avaliacao2 = 6.871;
const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);


console.log(media.toFixed(2));// formata com 2 casas decimais.
console.log(media.toString(2));// converte o número para representação em base 2 (binário).
console.log(typeof media);// Retorna "number", pois media é um número.
console.log(typeof Number);// Retorna "function", pois Number em JS é um construtor/função que converte valores para números.

//alguns cuidados com Number
console.log(7/0);
console.log("10"/2);
console.log("10,2"/2);
console.log(0.1 + 0.7);
console.log((10.346).toFixed(2));
