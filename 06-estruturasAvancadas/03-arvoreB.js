class BTreeNode {
  constructor(t, leaf = true) {
    this.t = t;
    this.leaf = leaf;
    this.keys = [];
    this.children = [];
  }
}

class BTree {
  constructor(t) {
    this.t = t;
    this.root = new BTreeNode(t, true);
  }

  splitChild(parent, index) {
    const t = this.t;
    const fullChild = parent.children[index];
    const newNode = new BTreeNode(t, fullChild.leaf);

    const middleKey = fullChild.keys[t - 1];

    newNode.keys = fullChild.keys.slice(t);
    fullChild.keys = fullChild.keys.slice(0, t - 1);

    if (!fullChild.leaf) {
      newNode.children = fullChild.children.slice(t);
      fullChild.children = fullChild.children.slice(0, t);
    }

    parent.children.splice(index + 1, 0, newNode);
    parent.keys.splice(index, 0, middleKey);
  }

  insertNonFull(node, key) {
    let i = node.keys.length - 1;

    if (node.leaf) {
      node.keys.push(0);

      while (i >= 0 && key < node.keys[i]) {
        node.keys[i + 1] = node.keys[i];
        i--;
      }

      node.keys[i + 1] = key;
      return;
    }

    while (i >= 0 && key < node.keys[i]) {
      i--;
    }

    i++;

    if (node.children[i].keys.length === 2 * this.t - 1) {
      this.splitChild(node, i);

      if (key > node.keys[i]) {
        i++;
      }
    }

    this.insertNonFull(node.children[i], key);
  }

  insert(key) {
    const root = this.root;

    if (root.keys.length === 2 * this.t - 1) {
      const newRoot = new BTreeNode(this.t, false);
      newRoot.children.push(root);
      this.splitChild(newRoot, 0);
      this.root = newRoot;
      this.insertNonFull(newRoot, key);
    } else {
      this.insertNonFull(root, key);
    }
  }

  remove(key, node = this.root) {
    const index = node.keys.indexOf(key);

    if (index !== -1 && node.leaf) {
      node.keys.splice(index, 1);
      return true;
    }

    if (node.leaf) return false;

    for (const child of node.children) {
      if (this.remove(key, child)) return true;
    }

    return false;
  }

  print(node = this.root, level = 0) {
    console.log("Nível", level, "->", node.keys);

    for (const child of node.children) {
      this.print(child, level + 1);
    }
  }
}

const btree = new BTree(3);
const valores = [10, 20, 5, 6, 12, 30, 7, 17];

for (const valor of valores) {
  btree.insert(valor);
  console.log("Após inserir", valor);
  btree.print();
}

btree.remove(6);
console.log("Após remover 6");
btree.print();

btree.remove(17);
console.log("Após remover 17");
btree.print();
