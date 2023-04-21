desafio


let nome = prompt("Qual seu nome?");
let idade = prompt("Quantos sua idade?");
let linguagem = prompt("Qual linguagem de programação você está estudando?");

console.log(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);

let gostaDeEstudar = prompt(`Você gostaria de se aprofundar em ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`);

if (gostaDeEstudar == 1) {
  console.log("Que legal");
} else if (gostaDeEstudar == 2) {
  console.log("Que pena");
} else {
  console.log("Opção inválida. Por favor, responda com 1 ou 2.");
}

