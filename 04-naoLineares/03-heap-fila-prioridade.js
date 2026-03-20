// 3) MAX-HEAP + FILA DE PRIORIDADE (MAIOR VALOR)

class HeapMaximo {
  constructor() {
    this.itens = [];
  }

  tamanho() {
    return this.itens.length;
  }

  espiar() {
    if (this.itens.length > 0) {
      return this.itens[0];
    } else {
      return null;
    }
  }

  inserir(valor) {
    this.itens.push(valor);
    this.#subir(this.itens.length - 1);
  }

  removerMaior() {
    if (!this.itens.length) return null;
    if (this.itens.length === 1) return this.itens.pop();

    const maior = this.itens[0];
    this.itens[0] = this.itens.pop();
    this.#descer(0);
    return maior;
  }

  #indicePai(indice) {
    return Math.floor((indice - 1) / 2);
  }

  #indiceEsquerda(indice) {
    return 2 * indice + 1;
  }

  #indiceDireita(indice) {
    return 2 * indice + 2;
  }

  #trocar(i, j) {
    [this.itens[i], this.itens[j]] = [this.itens[j], this.itens[i]];
  }

  #subir(indice) {
    let i = indice;

    while (i > 0) {
      const p = this.#indicePai(i);
      if (this.itens[p] >= this.itens[i]) break;
      this.#trocar(p, i);
      i = p;
    }
  }

  #descer(indice) {
    let indiceAtual = indice;
    const tamanho = this.itens.length;

    while (true) {
      const indiceEsquerda = this.#indiceEsquerda(indiceAtual);
      const indiceDireita = this.#indiceDireita(indiceAtual);

      let indiceMaiorFilho;

      if (indiceEsquerda < tamanho && indiceDireita < tamanho) {
        if (this.itens[indiceEsquerda] > this.itens[indiceDireita]) {
          indiceMaiorFilho = indiceEsquerda;
        } else {
          indiceMaiorFilho = indiceDireita;
        }
      } else {
        if (indiceEsquerda < tamanho) {
          indiceMaiorFilho = indiceEsquerda;
        } else {
          indiceMaiorFilho = indiceDireita;
        }
      }

      if (indiceMaiorFilho >= tamanho) break;

      if (this.itens[indiceAtual] >= this.itens[indiceMaiorFilho]) break;

      this.#trocar(indiceAtual, indiceMaiorFilho);

      indiceAtual = indiceMaiorFilho;
    }
  }
}

class FilaPrioridadeMaxima {
  constructor() {
    this.heap = new HeapMaximo();
  }

  enfileirar(valor) {
    this.heap.inserir(valor);
  }

  desenfileirar() {
    return this.heap.removerMaior();
  }

  espiar() {
    return this.heap.espiar();
  }

  tamanho() {
    return this.heap.tamanho();
  }
}

// Demo
console.log("===== 3) HEAP MÁXIMO + FILA DE PRIORIDADE =====");

const heap = new HeapMaximo();
[3, 10, 5, 1, 7, 12].forEach((v) => heap.inserir(v));

console.log("espiar =", heap.espiar());
console.log("removerMaior =", heap.removerMaior());
console.log("espiar =", heap.espiar());

const filaPrioridade = new FilaPrioridadeMaxima();
[15, 2, 99, 42, 42, 7].forEach((v) => filaPrioridade.enfileirar(v));

console.log("fila.espiar =", filaPrioridade.espiar());
console.log("fila.desenfileirar =", filaPrioridade.desenfileirar());
console.log("fila.desenfileirar =", filaPrioridade.desenfileirar());
console.log("fila.tamanho =", filaPrioridade.tamanho());