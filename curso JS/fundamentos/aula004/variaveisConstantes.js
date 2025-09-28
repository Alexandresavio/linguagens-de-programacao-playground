/** 
 * Em Javascript var, let e const são utilizados para declarar variáveis
 * Regras para nomenclatura de variaveis:
 *      Pode começar com letra, _ ou $.
 *      Pode conter números (mas não no início).
 *      Diferencia maiúsculas/minúsculas.
 *      Não pode usar palavras reservadas.
 *      Siga boas práticas de legibilidade (camelCase, PascalCase, constantes em MAIÚSCULO).
 * 
 */

/***
 * Sintaxe de declaração de var em JS
 *  var <identificador> = <valor>;
 */
var a = 3; 
console.log("Variavel 'a' recebe o valor "+a);

/***
 * Sintaxe de declaração de let em JS
 *  let <identificador> = <valor>;
 */
let nome = "Savio";
console.log("Variavel 'nome' recebeu o conteúdo: "+nome);

/***
 * Sintaxe de declaração de constante em JS
 *  const <identificador> = <valor>;
 */
const dataNascimento = "01/09/1981";
console.log("Constante 'dataNascimento' recebeu o conteúdo: "+dataNascimento);