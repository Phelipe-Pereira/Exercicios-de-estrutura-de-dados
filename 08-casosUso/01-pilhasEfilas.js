class FilaImpressao {
  constructor() {
    this.fila = [];
  }

  adicionarDocumento(documento) {
    this.fila.push(documento);
  }

  imprimirDocumento() {
    if (this.fila.length === 0) {
      console.log("Fila vazia");
      return;
    }

    console.log("Imprimindo:", this.fila.shift());
  }
}

class Navegador {
  constructor() {
    this.paginaAtual = null;
    this.pilhaVoltar = [];
    this.pilhaAvancar = [];
  }

  visitarPagina(pagina) {
    if (this.paginaAtual !== null) {
      this.pilhaVoltar.push(this.paginaAtual);
    }

    this.paginaAtual = pagina;
    this.pilhaAvancar = [];
    console.log("Atual:", this.paginaAtual);
  }

  voltar() {
    if (this.pilhaVoltar.length === 0) {
      return;
    }

    this.pilhaAvancar.push(this.paginaAtual);
    this.paginaAtual = this.pilhaVoltar.pop();
    console.log("Atual:", this.paginaAtual);
  }

  avancar() {
    if (this.pilhaAvancar.length === 0) {
      return;
    }

    this.pilhaVoltar.push(this.paginaAtual);
    this.paginaAtual = this.pilhaAvancar.pop();
    console.log("Atual:", this.paginaAtual);
  }
}

const fila = new FilaImpressao();
fila.adicionarDocumento("arquivo1.pdf");
fila.adicionarDocumento("arquivo2.pdf");
fila.imprimirDocumento();
fila.imprimirDocumento();
fila.imprimirDocumento();

const navegador = new Navegador();
navegador.visitarPagina("google.com");
navegador.visitarPagina("youtube.com");
navegador.visitarPagina("github.com");
navegador.voltar();
navegador.voltar();
navegador.avancar();