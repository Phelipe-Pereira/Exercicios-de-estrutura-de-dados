// 2) ÁRVORES AVL   

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

class NoAvl {
  constructor(valor) {
    this.valor = valor;
    this.esquerda = null;
    this.direita = null;
    this.altura = 1;
  }
}

class ArvoreAvl {
  constructor() {
    this.raiz = null;
  }

  inserir(valor) {
    this.raiz = this.#inserirEm(this.raiz, valor);
  }

  remover(valor) {
    this.raiz = this.#removerDe(this.raiz, valor);
  }

  contem(valor) {
    let noAtual = this.raiz;

    while (noAtual) {
      if (valor === noAtual.valor) return true;

      if (valor < noAtual.valor) {
        noAtual = noAtual.esquerda;
      } else {
        noAtual = noAtual.direita;
      }
    }

    return false;
  }

  #alturaDe(no) {
    if (no) {
      return no.altura;
    } else {
      return 0;
    }
  }

  #recalcularAltura(no) {
    no.altura =
      1 + Math.max(this.#alturaDe(no.esquerda), this.#alturaDe(no.direita));
  }

  #fatorBalanceamento(no) {
    if (no) {
      return this.#alturaDe(no.esquerda) - this.#alturaDe(no.direita);
    } else {
      return 0;
    }
  }

  #rotacionarDireita(pivo) {
    const novaRaiz = pivo.esquerda;
    const subArvoreMovida = novaRaiz.direita;

    novaRaiz.direita = pivo;
    pivo.esquerda = subArvoreMovida;

    this.#recalcularAltura(pivo);
    this.#recalcularAltura(novaRaiz);

    return novaRaiz;
  }

  #rotacionarEsquerda(pivo) {
    const novaRaiz = pivo.direita;
    const subArvoreMovida = novaRaiz.esquerda;

    novaRaiz.esquerda = pivo;
    pivo.direita = subArvoreMovida;

    this.#recalcularAltura(pivo);
    this.#recalcularAltura(novaRaiz);

    return novaRaiz;
  }

  #rebalancear(no) {
    this.#recalcularAltura(no);

    const fator = this.#fatorBalanceamento(no);
    const fatorEsquerda = this.#fatorBalanceamento(no.esquerda);
    const fatorDireita = this.#fatorBalanceamento(no.direita);

    if (fator > 1 && fatorEsquerda >= 0) return this.#rotacionarDireita(no);

    if (fator > 1 && fatorEsquerda < 0) {
      no.esquerda = this.#rotacionarEsquerda(no.esquerda);
      return this.#rotacionarDireita(no);
    }

    if (fator < -1 && fatorDireita <= 0) return this.#rotacionarEsquerda(no);

    if (fator < -1 && fatorDireita > 0) {
      no.direita = this.#rotacionarDireita(no.direita);
      return this.#rotacionarEsquerda(no);
    }

    return no;
  }

  #inserirEm(no, valor) {
    if (!no) return new NoAvl(valor);

    if (valor < no.valor) no.esquerda = this.#inserirEm(no.esquerda, valor);
    else if (valor > no.valor) no.direita = this.#inserirEm(no.direita, valor);
    else return no;

    return this.#rebalancear(no);
  }

  #noMaisAEsquerda(no) {
    let noAtual = no;
    while (noAtual.esquerda) noAtual = noAtual.esquerda;
    return noAtual;
  }

  #removerDe(no, valor) {
    if (!no) return null;

    if (valor < no.valor) no.esquerda = this.#removerDe(no.esquerda, valor);
    else if (valor > no.valor) no.direita = this.#removerDe(no.direita, valor);
    else {
      if (!no.esquerda || !no.direita) {
        if (no.esquerda) {
          no = no.esquerda;
        } else {
          no = no.direita;
        }
      } else {
        const sucessor = this.#noMaisAEsquerda(no.direita);
        no.valor = sucessor.valor;
        no.direita = this.#removerDe(no.direita, sucessor.valor);
      }
    }

    return no ? this.#rebalancear(no) : null;
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
console.log("===== 2) AVL =====");

const avl = new ArvoreAvl();
[10, 20, 30, 40, 50, 25].forEach((v) => avl.inserir(v));

console.log("percursos =", avl.percursos());
console.log("contem(25) =", avl.contem(25));

avl.remover(40);
console.log("após remover 40:", avl.percursos());