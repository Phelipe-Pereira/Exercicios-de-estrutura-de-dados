class SimpleIndex {
  constructor() {
    this.data = [];
  }

  insert(id, position) {
    this.data.push({ id, position });
    this.data.sort((a, b) => a.id - b.id);
  }

  search(id) {
    let left = 0;
    let right = this.data.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (this.data[mid].id === id) {
        return this.data[mid];
      }

      if (id < this.data[mid].id) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return null;
  }
}

const index = new SimpleIndex();

index.insert(100, "bloco_1");
index.insert(50, "bloco_2");
index.insert(200, "bloco_3");
index.insert(120, "bloco_4");

console.log(index.search(120));
console.log(index.search(999));
