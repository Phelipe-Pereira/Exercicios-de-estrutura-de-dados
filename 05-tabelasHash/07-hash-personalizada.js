function hashString(str, size = 100) {

  let hash = 0;

  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) % size;
  }

  return hash;
}

console.log(hashString("casa"));
console.log(hashString("carro"));
console.log(hashString("janela"));