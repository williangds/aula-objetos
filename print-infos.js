//desafio 1: printar infos. Você deve acessar um objeto com informações de um cliente e exibir essas informações no console 

const cliente = {
    nome: 'André',
    idade: '36',
    cpf: '12589674589',
    email: 'andre@email.com'
}
/* 
console.log(cliente);
console.log(cliente.nome);
console.log(cliente.idade);
console.log(cliente.cpf);
console.log(cliente.email); */

console.log(`Meu nome é ${cliente.nome}, tenho ${cliente.idade} anos. CPF ${cliente.cpf.substring(0,3)}. e email ${cliente.email}`);
