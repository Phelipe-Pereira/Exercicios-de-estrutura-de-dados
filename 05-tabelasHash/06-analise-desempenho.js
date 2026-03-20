function criarTabela(size) {

  const tabela = new Array(size).fill(null);

  for (let i = 0; i < 500; i++) {
    const index = i % size;
    tabela[index] = i;
  }

  return tabela;
}

console.time("50");
criarTabela(50);
console.timeEnd("50");

console.time("100");
criarTabela(100);
console.timeEnd("100");

console.time("250");
criarTabela(250);
console.timeEnd("250");