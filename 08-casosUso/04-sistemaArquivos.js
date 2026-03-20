class SistemaArquivos {
  constructor() {
    this.arquivos = [];
  }

  inserir(nome) {
    this.arquivos.push(nome);
    this.arquivos.sort((a, b) => a.localeCompare(b));
  }

  remover(nome) {
    const indice = this.arquivos.indexOf(nome);

    if (indice !== -1) {
      this.arquivos.splice(indice, 1);
    }
  }

  buscar(nome) {
    let inicio = 0;
    let fim = this.arquivos.length - 1;

    while (inicio <= fim) {
      const meio = Math.floor((inicio + fim) / 2);
      const comparacao = this.arquivos[meio].localeCompare(nome);

      if (comparacao === 0) {
        return this.arquivos[meio];
      }

      if (comparacao > 0) {
        fim = meio - 1;
      } else {
        inicio = meio + 1;
      }
    }

    return null;
  }
}

const sistema = new SistemaArquivos();

console.time("Inserções");
sistema.inserir("foto.png");
sistema.inserir("documento.pdf");
sistema.inserir("musica.mp3");
sistema.inserir("video.mp4");
console.timeEnd("Inserções");

console.time("Busca");
console.log(sistema.buscar("musica.mp3"));
console.timeEnd("Busca");

console.time("Remoção");
sistema.remover("foto.png");
console.timeEnd("Remoção");

console.log(sistema.arquivos);
