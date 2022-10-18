//desafio 2: acessar chaves - consultar um objeto utilizando uma lista de chaves relativas a informações dos clientes gerada pelo sistema e printar o resultado na tela.

const cliente = {
    nome: 'André',
    idade: 36,
    cpf: '12589674589',
    email: 'andre@email.com'
}

const chaves = ['nome', 'idade', 'cpf', 'email'];

console.log(' ');
console.log(`nome: ${cliente.nome}`);
console.log(' ');
console.log(`nome: ${cliente[chaves[0]]}`);
console.log(' ');
console.log(`nome: ${cliente['nome']}`);
console.log(' ');
chaves.forEach(i=>console.log(cliente[i]));
