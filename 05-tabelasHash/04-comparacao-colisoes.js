function hash(k, size) {
  return k % size;
}

const size = 1333;
const tabela = new Array(size).fill(null).map(() => []);

for (let i = 0; i < 1000; i++) {
  const index = hash(i, size);
  tabela[index].push(i);
}

for (let i = 0; i < 1000; i++) {
  const index = hash(i, size);
  tabela[index].includes(i);
}