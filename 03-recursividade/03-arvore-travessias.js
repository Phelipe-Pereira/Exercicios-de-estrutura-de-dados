// 3) TRAVESSIA EM ÁRVORES (In-Order, Pre-Order, Post-Order)

class TreeNode {
  constructor(valor, esquerda = null, direita = null) {
    this.valor = valor;
    this.esquerda = esquerda;
    this.direita = direita;
  }
}

function inOrder(no, visit = console.log) {
  if (no === null) return;
  inOrder(no.esquerda, visit);
  visit(no.valor);
  inOrder(no.direita, visit);
}

function preOrder(no, visit = console.log) {
  if (no === null) return;
  visit(no.valor);
  preOrder(no.esquerda, visit);
  preOrder(no.direita, visit);
}

function postOrder(no, visit = console.log) {
  if (no === null) return;
  postOrder(no.esquerda, visit);
  postOrder(no.direita, visit);
  visit(no.valor);
}

// Demo
console.log("===== 3) ÁRVORES: PERCURSOS =====");
//        4
//      /   \
//     2     6
//    / \   / \
//   1  3  5  7
const arvore =
  new TreeNode(
    4,
    new TreeNode(2, new TreeNode(1), new TreeNode(3)),
    new TreeNode(6, new TreeNode(5), new TreeNode(7))
  );

const coleta = () => {
  const arr = [];
  return { arr, visit: (v) => arr.push(v) };
};

let c;

c = coleta();
inOrder(arvore, c.visit);
console.log("inOrder  =", c.arr.join(", ")); // 1,2,3,4,5,6,7

c = coleta();
preOrder(arvore, c.visit);
console.log("preOrder =", c.arr.join(", ")); // 4,2,1,3,6,5,7

c = coleta();
postOrder(arvore, c.visit);
console.log("postOrder=", c.arr.join(", ")); // 1,3,2,5,7,6,4