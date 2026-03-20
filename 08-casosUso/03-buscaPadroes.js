function buscaForcaBruta(texto, padrao) {
  const posicoes = [];

  for (let i = 0; i <= texto.length - padrao.length; i++) {
    let encontrou = true;

    for (let j = 0; j < padrao.length; j++) {
      if (texto[i + j] !== padrao[j]) {
        encontrou = false;
        break;
      }
    }

    if (encontrou) {
      posicoes.push(i);
    }
  }

  return posicoes;
}

function construirLPS(padrao) {
  const lps = Array(padrao.length).fill(0);
  let tamanho = 0;
  let i = 1;

  while (i < padrao.length) {
    if (padrao[i] === padrao[tamanho]) {
      tamanho++;
      lps[i] = tamanho;
      i++;
    } else if (tamanho !== 0) {
      tamanho = lps[tamanho - 1];
    } else {
      lps[i] = 0;
      i++;
    }
  }

  return lps;
}

function kmp(texto, padrao) {
  const lps = construirLPS(padrao);
  const posicoes = [];
  let i = 0;
  let j = 0;

  while (i < texto.length) {
    if (texto[i] === padrao[j]) {
      i++;
      j++;
    }

    if (j === padrao.length) {
      posicoes.push(i - j);
      j = lps[j - 1];
    } else if (i < texto.length && texto[i] !== padrao[j]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }

  return posicoes;
}

const textoPequeno = "banana";
const padraoPequeno = "ana";

const textoGrande = "ABABDABACDABABCABABABABDABACDABABCABAB";
const padraoGrande = "ABAB";

console.log("Força bruta pequeno:", buscaForcaBruta(textoPequeno, padraoPequeno));
console.log("Força bruta grande:", buscaForcaBruta(textoGrande, padraoGrande));

console.time("KMP");
console.log("KMP grande:", kmp(textoGrande, padraoGrande));
console.timeEnd("KMP");

console.time("Força bruta");
console.log("Força bruta grande:", buscaForcaBruta(textoGrande, padraoGrande));
console.timeEnd("Força bruta");