// 4) SOMA DOS ELEMENTOS DE UMA LISTA ENCADEADA

class ListNode {
  constructor(valor, proximo = null) {
    this.valor = valor;
    this.proximo = proximo;
  }
}

function somaLista(no) {
  if (no === null) return 0;
  return no.valor + somaLista(no.proximo);
}

// Demo
console.log("===== 4) SOMA LISTA ENCADEADA =====");
// Lista: 10 -> 20 -> 30
const lista = new ListNode(10, new ListNode(20, new ListNode(30)));
console.log("somaLista =", somaLista(lista)); // 60