// 1) ÁRVORES BINÁRIAS + BST

class NoBinario {
  constructor(valor, esquerda = null, direita = null) {
    this.valor = valor;
    this.esquerda = esquerda;
    this.direita = direita;
  }
}

function percorrerEmOrdem(no, visitar = console.log) {
  if (!no) return;

  percorrerEmOrdem(no.esquerda, visitar);
  visitar(no.valor);
  percorrerEmOrdem(no.direita, visitar);
}

function percorrerPreOrdem(no, visitar = console.log) {
  if (!no) return;

  visitar(no.valor);

  percorrerPreOrdem(no.esquerda, visitar);
  percorrerPreOrdem(no.direita, visitar);
}

function percorrerPosOrdem(no, visitar = console.log) {
  if (!no) return;

  percorrerPosOrdem(no.esquerda, visitar);
  percorrerPosOrdem(no.direita, visitar);

  visitar(no.valor);
}

class ArvoreBinariaBusca {
  constructor() {
    this.raiz = null;
  }

  inserir(valor) {
    if (!this.raiz) {
      this.raiz = new NoBinario(valor);
      return;
    }

    let noAtual = this.raiz;

    while (true) {
      if (valor === noAtual.valor) return;

      if (valor < noAtual.valor) {
        if (!noAtual.esquerda) {
          noAtual.esquerda = new NoBinario(valor);
          return;
        }
        noAtual = noAtual.esquerda;
        continue;
      }

      if (!noAtual.direita) {
        noAtual.direita = new NoBinario(valor);
        return;
      }

      noAtual = noAtual.direita;
    }
  }

  contem(valor) {
    let noAtual = this.raiz;

    while (noAtual) {
      if (valor === noAtual.valor) return true;
      noAtual = valor < noAtual.valor ? noAtual.esquerda : noAtual.direita;
    }

    return false;
  }

  remover(valor) {
    this.raiz = this.#removerDe(this.raiz, valor);
  }

  #removerDe(no, valor) {
    if (!no) return null;

    if (valor < no.valor) {
      no.esquerda = this.#removerDe(no.esquerda, valor);
      return no;
    }

    if (valor > no.valor) {
      no.direita = this.#removerDe(no.direita, valor);
      return no;
    }

    if (!no.esquerda && !no.direita) return null;
    if (!no.esquerda) return no.direita;
    if (!no.direita) return no.esquerda;

    const sucessor = this.#noMaisAEsquerda(no.direita);

    no.valor = sucessor.valor;
    no.direita = this.#removerDe(no.direita, sucessor.valor);

    return no;
  }

  #noMaisAEsquerda(no) {
    let noAtual = no;
    while (noAtual.esquerda) noAtual = noAtual.esquerda;

    return noAtual;
  }

  construirCom(valores = []) {
    for (const valor of valores) this.inserir(valor);
  }

  percursos() {
    const criarColetor = () => {
      const valores = [];
      return { valores, visitar: (v) => valores.push(v) };
    };

    const emOrdem = criarColetor();
    percorrerEmOrdem(this.raiz, emOrdem.visitar);

    const preOrdem = criarColetor();
    percorrerPreOrdem(this.raiz, preOrdem.visitar);

    const posOrdem = criarColetor();
    percorrerPosOrdem(this.raiz, posOrdem.visitar);

    return {
      emOrdem: emOrdem.valores,
      preOrdem: preOrdem.valores,
      posOrdem: posOrdem.valores,
    };
  }
}

// Demo
console.log("===== 1) BST + PERCURSOS =====");

const bst = new ArvoreBinariaBusca();
bst.construirCom([4, 2, 6, 1, 3, 5, 7, 7, 2]);

console.log("contem(5) =", bst.contem(5));
console.log("contem(99) =", bst.contem(99));
console.log("percursos =", bst.percursos());

bst.remover(6);
console.log("após remover 6:", bst.percursos());