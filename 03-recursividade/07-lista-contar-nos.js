// 7) CONTAGEM DE NÓS EM UMA LISTA ENCADEADA

class ListNode {
  constructor(valor, proximo = null) {
    this.valor = valor;
    this.proximo = proximo;
  }
}

function contarNos(no) {
  if (no === null) return 0;
  return 1 + contarNos(no.proximo);
}

// Demo
console.log("===== 7) CONTAR NÓS LISTA ENCADEADA =====");
// Lista: 10 -> 20 -> 30
const lista = new ListNode(10, new ListNode(20, new ListNode(30)));
console.log("contarNos =", contarNos(lista)); // 3