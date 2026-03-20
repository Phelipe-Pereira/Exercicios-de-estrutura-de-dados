class Dictionary {

  constructor() {
    this.table = {};
  }

  add(word, meaning) {
    this.table[word] = meaning;
  }

  search(word) {
    return this.table[word] || null;
  }

  remove(word) {
    delete this.table[word];
  }

}

const dict = new Dictionary();

dict.add("hash", "estrutura de dados");

console.log(dict.search("hash"));

dict.remove("hash");

console.log(dict.search("hash"));