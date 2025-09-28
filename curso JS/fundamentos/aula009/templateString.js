/***
 * Template Strings: Permite criar strings com suporte a interpolação de variáveis e expressões. 
 */

const nome = 'João';
const idade = 30;

const mensagem = `Olá, meu nome é ${nome} e eu tenho ${idade} anos.`;

console.log(mensagem); // Saída: "Olá, meu nome é João e eu tenho 30 anos."

const preco = 100;
const desconto = 0.1;

const mensagem2 = `O preço do produto é ${preco}. 
Com um desconto de ${desconto * 100}%, o novo preço é ${preco * (1 - desconto)}.`;

console.log(mensagem2);
// Saída:
// "O preço do produto é $100.
// Com um desconto de 10%, o novo preço é $90."