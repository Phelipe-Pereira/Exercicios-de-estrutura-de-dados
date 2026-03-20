class HashLinear {

  constructor(size = 10) {
    this.table = new Array(size).fill(null);
    this.size = size;
  }

  hash(key) {
    return key % this.size;
  }

  insert(key, value) {
    let index = this.hash(key);

    while (this.table[index] !== null) {
      index = (index + 1) % this.size;
    }

    this.table[index] = { key, value };
  }

  search(key) {
    let index = this.hash(key);

    while (this.table[index] !== null) {

      if (this.table[index].key === key) {
        return this.table[index].value;
      }

      index = (index + 1) % this.size;
    }

    return null;
  }

}

const hash = new HashLinear();

hash.insert(10, "A");
hash.insert(20, "B");

console.log(hash.search(20));