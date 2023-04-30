/* (nome) (sobrenome) tem (idade) anos, pesa (peso) kg tem (altura) de altura
e seu IMC é de (imc)
(nome) nasceu em (anoNascimento)
*/

const nome = 'Verônica';
const sobrenome = 'Rodrigues';
const idade = 22;
const peso = 72;
const alturaEmM = 1.63;

let imc = peso / (alturaEmM * alturaEmM) 
let anoNascimento = 2023 - idade


console.log (`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg tem ${alturaEmM} de altura`)
console.log (`e seu IMC é de ${imc}`)
console.log (`${nome} nasceu em ${anoNascimento}`)