class HashEncadeamento {

  constructor(size = 10) {
    this.table = new Array(size).fill(null).map(() => []);
    this.size = size;
  }

  hash(key) {
    return key % this.size;
  }

  insert(key, value) {
    const index = this.hash(key);
    this.table[index].push({ key, value });
  }

  search(key) {
    const index = this.hash(key);

    for (const item of this.table[index]) {
      if (item.key === key) return item.value;
    }

    return null;
  }

  remove(key) {
    const index = this.hash(key);
    this.table[index] =
      this.table[index].filter(item => item.key !== key);
  }

}

const hash = new HashEncadeamento();

hash.insert(10, "A");
hash.insert(20, "B");

console.log(hash.search(20));

hash.remove(20);

console.log(hash.search(20));