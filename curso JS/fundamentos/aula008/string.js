const escola = ("cod3r");
console.log(escola.charAt(4)); //Retorna o caractere no índice 4 → "r"
console.log(escola.charAt(5)); //Não existe índice 5 → retorna string vazia ("")
console.log(escola.charCodeAt(3)); // código Unicode/ASCII
console.log(escola.indexOf('4')); // Busca o caractere 'r'. Está no índice 4.

console.log(escola.substring(1)); // retorna Do índice 1 até o final → "od3r"
console.log(escola.substring(0, 3)); // retorna Do índice 0 até 3 (exclusivo) → "cod"

console.log('Escola '.concat(escola).concat("!")); //concatenar strings
console.log(escola.replace(3, "e"));//Aqui o replace não substitui por posição, mas sim o primeiro caractere "3" encontrado. Resultado: "coder"

console.log("Ana, Maria, Pedro".split(","));