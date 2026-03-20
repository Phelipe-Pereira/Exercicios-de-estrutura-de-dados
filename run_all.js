(async () => {
  console.log('\n=== Estruturas Lineares ===');
  await import('./02-estruturasDeDadosLineares/desafio_queue.js');
  await import('./02-estruturasDeDadosLineares/linkedList.js');
  await import('./02-estruturasDeDadosLineares/linkedListTwo.js');
  await import('./02-estruturasDeDadosLineares/queue.js');
  await import('./02-estruturasDeDadosLineares/stack.js');
  await import('./02-estruturasDeDadosLineares/vetores.js');

  console.log('\n=== Recursão ===');
  await import('./03-recursividade/01-fatorial.js');
  await import('./03-recursividade/02-fibonacci.js');
  await import('./03-recursividade/03-arvore-travessias.js');
  await import('./03-recursividade/04-lista-soma.js');
  await import('./03-recursividade/05-bst-busca.js');
  await import('./03-recursividade/06-hanoi.js');
  await import('./03-recursividade/07-lista-contar-nos.js');

  console.log('\n=== Não Lineares ===');
  await import('./04-naoLineares/01-bst-percursos.js');
  await import('./04-naoLineares/02-avl.js');
  await import('./04-naoLineares/03-heap-fila-prioridade.js');
  await import('./04-naoLineares/04-grafo-dfs-bfs-dijkstra.js');
  await import('./04-naoLineares/05-caminhos-minimos-dijkstra-floyd.js');

  console.log('\n=== Tabelas Hash ===');
  await import('./05-tabelasHash/01-funcoes-de-hash.js');
  await import('./05-tabelasHash/02-encadeamento.js');
  await import('./05-tabelasHash/03-enderecamento-aberto.js');
  await import('./05-tabelasHash/04-comparacao-colisoes.js');
  await import('./05-tabelasHash/05-dicionario-hash.js');
  await import('./05-tabelasHash/06-analise-desempenho.js');
  await import('./05-tabelasHash/07-hash-personalizada.js');

  console.log('\n=== Estruturas Avançadas ===');
  await import('./06-estruturasAvancadas/01-union-find.js');
  await import('./06-estruturasAvancadas/02-Kruskal.js');
  await import('./06-estruturasAvancadas/03-arvoreB.js');
  await import('./06-estruturasAvancadas/04-arvoreB+.js');
  await import('./06-estruturasAvancadas/06-aplicacoesArvore.js');

  console.log('\n=== Algoritmos de Ordenação ===');
  await import('./07-algoritmosOrdenacao/01-selection-sort.js');
  await import('./07-algoritmosOrdenacao/02-insertionSort.js');
  await import('./07-algoritmosOrdenacao/03-bubbleSort.js');
  await import('./07-algoritmosOrdenacao/04-selectioXInsertion.js');
  await import('./07-algoritmosOrdenacao/05-mergeSort.js');
  await import('./07-algoritmosOrdenacao/06-quickSort.js');
  await import('./07-algoritmosOrdenacao/07-merge-quick-heap.js');
  await import('./07-algoritmosOrdenacao/08-quickXmergeXestabilidade.js');
  await import('./07-algoritmosOrdenacao/09-heapSortEstavel.js');
  await import('./07-algoritmosOrdenacao/10-selectionSortEstavel.js');

  console.log('\n=== Casos de Uso ===');
  await import('./08-casosUso/01-pilhasEfilas.js');
  await import('./08-casosUso/02-caixeiroViajante.js');
  await import('./08-casosUso/03-buscaPadroes.js');
  await import('./08-casosUso/04-sistemaArquivos.js');
  await import('./08-casosUso/05-simulacaoGrafos.js');

  console.log('\n--- Iniciando testes ---');
})();
