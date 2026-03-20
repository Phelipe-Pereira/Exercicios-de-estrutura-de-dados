class BPlusNode {
  constructor(leaf = false) {
    this.leaf = leaf;
    this.keys = [];
    this.children = [];
    this.next = null;
  }
}

class BPlusTree {
  constructor(order) {
    this.order = order;
    this.root = new BPlusNode(true);
  }

  insert(value) {
    const result = this.insertRecursive(this.root, value);

    if (result) {
      const newRoot = new BPlusNode(false);
      newRoot.keys = [result.key];
      newRoot.children = [this.root, result.newNode];
      this.root = newRoot;
    }
  }

  insertRecursive(node, value) {
    if (node.leaf) {
      node.keys.push(value);
      node.keys.sort((a, b) => a - b);

      if (node.keys.length < this.order * 2) return null;

      const middle = Math.floor(node.keys.length / 2);
      const newLeaf = new BPlusNode(true);

      newLeaf.keys = node.keys.splice(middle);
      newLeaf.next = node.next;
      node.next = newLeaf;

      return {
        key: newLeaf.keys[0],
        newNode: newLeaf,
      };
    }

    let i = 0;
    while (i < node.keys.length && value >= node.keys[i]) {
      i++;
    }

    const result = this.insertRecursive(node.children[i], value);

    if (!result) return null;

    node.keys.splice(i, 0, result.key);
    node.children.splice(i + 1, 0, result.newNode);

    if (node.keys.length < this.order * 2) return null;

    const middle = Math.floor(node.keys.length / 2);
    const newInternal = new BPlusNode(false);
    const promoted = node.keys[middle];

    newInternal.keys = node.keys.splice(middle + 1);
    newInternal.children = node.children.splice(middle + 1);
    node.keys.splice(middle, 1);

    return {
      key: promoted,
      newNode: newInternal,
    };
  }

  print(node = this.root, level = 0) {
    console.log(
      "Nível",
      level,
      node.leaf ? "(folha)" : "(interno)",
      "->",
      node.keys,
    );

    for (const child of node.children) {
      this.print(child, level + 1);
    }
  }
}

const bptree = new BPlusTree(2);
const valores = [15, 5, 25, 10, 20, 30, 35];

for (const valor of valores) {
  bptree.insert(valor);
  console.log("Após inserir", valor);
  bptree.print();
}
