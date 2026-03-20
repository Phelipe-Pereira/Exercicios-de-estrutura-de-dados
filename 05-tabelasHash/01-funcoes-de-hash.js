const TABLE_SIZE = 10;

function hashInteiro(k) {
  return k % TABLE_SIZE;
}

function hashString(str) {
  let soma = 0;

  for (let i = 0; i < str.length; i++) {
    soma += str.charCodeAt(i);
  }

  return soma % TABLE_SIZE;
}

console.log(hashInteiro(25));
console.log(hashString("joao"));