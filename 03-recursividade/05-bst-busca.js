// 5) BUSCA EM UMA ÁRVORE BINÁRIA DE BUSCA (BST)

class TreeNode {
  constructor(valor, esquerda = null, direita = null) {
    this.valor = valor;
    this.esquerda = esquerda;
    this.direita = direita;
  }
}

function buscarBST(no, alvo) {
  if (no === null) return false;
  if (no.valor === alvo) return true;

  if (alvo < no.valor) {
    return buscarBST(no.esquerda, alvo);
  }
  return buscarBST(no.direita, alvo);
}

// Demo
console.log("===== 5) BUSCA BST =====");
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

console.log("buscarBST(arvore, 5) =", buscarBST(arvore, 5));   // true
console.log("buscarBST(arvore, 99) =", buscarBST(arvore, 99)); // false